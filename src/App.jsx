import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import Menu from "./components/Menu/Menu";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ChiSiamo from "./components/ChiSiamo/ChiSiamo";

/**
 * Root application — single-page layout with three scroll sections:
 * Home, Menu & Experience, Contact & Location.
 */
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <ChiSiamo />
        <Menu />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
