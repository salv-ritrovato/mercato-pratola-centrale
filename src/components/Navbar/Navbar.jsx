import { useEffect, useState } from "react";
import { ASSETS } from "../../constants/assets";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "menu", label: "Menu" },
  { id: "contact", label: "Contatti" },
];

const LG_BREAKPOINT = 992;

/**
 * Sticky navbar — inline links on desktop, modal drawer on tablet/mobile.
 */
export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPos = window.scrollY + varNavOffset();
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${LG_BREAKPOINT}px)`);
    const onResize = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onResize);
    return () => mq.removeEventListener("change", onResize);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (sectionId) => {
    closeMenu();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dark fixed-top navbar-mp ${styles.bar} ${
          scrolled || menuOpen ? styles.barSolid : ""
        }`}
        aria-label="Navigazione principale"
      >
        <div className="container site-container">
          <a
            href="#home"
            className={`navbar-brand ${styles.brand}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
          >
            <img
              src={ASSETS.logo}
              alt="Mercato Pratola Centrale — torna alla home"
              className={styles.logoImg}
              width={220}
              height={48}
              fetchPriority="high"
            />
          </a>

          {/* Mobile / tablet toggler */}
          <button
            type="button"
            className={`navbar-toggler d-lg-none ${menuOpen ? "" : "collapsed"}`}
            aria-controls="mobileNav"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Desktop navigation */}
          <div className="collapse navbar-collapse d-none d-lg-flex" id="desktopNav">
            <ul className="navbar-nav ms-auto align-items-center">
              {NAV_LINKS.map((link) => (
                <li className="nav-item" key={link.id}>
                  <button
                    type="button"
                    className={`nav-link ${activeSection === link.id ? "active" : ""}`}
                    onClick={() => handleNavClick(link.id)}
                    aria-current={activeSection === link.id ? "page" : undefined}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="btn btn-primary btn-sm btn-nav-cta ms-3"
              onClick={() => handleNavClick("contact")}
            >
              Prenota
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile / tablet modal menu */}
      <div
        className={`${styles.modal} ${menuOpen ? styles.modalOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className={styles.backdrop}
          aria-label="Chiudi menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={closeMenu}
        />

        <div
          className={styles.panel}
          id="mobileNav"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobileNavTitle"
        >
          <div className={styles.panelHeader}>
            <p id="mobileNavTitle" className={styles.panelTitle}>
              Menu
            </p>
            <button
              type="button"
              className={styles.closeBtn}
              aria-label="Chiudi menu"
              onClick={closeMenu}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <nav className={styles.panelNav} aria-label="Navigazione mobile">
            <ul className={styles.panelList}>
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    className={`${styles.panelLink} ${
                      activeSection === link.id ? styles.panelLinkActive : ""
                    }`}
                    onClick={() => handleNavClick(link.id)}
                    aria-current={activeSection === link.id ? "page" : undefined}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.panelFooter}>
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={() => handleNavClick("contact")}
            >
              Prenota un Tavolo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function varNavOffset() {
  const height = getComputedStyle(document.documentElement).getPropertyValue(
    "--nav-height",
  );
  return parseFloat(height) * 16 || 72;
}
