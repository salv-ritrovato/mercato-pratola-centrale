/**
 * Public assets (served from /public).
 */
export const ASSETS = {
  logo: "/mercalo-logo.png",
  banner: "/logo-banner.png",
  heroBg: "/pictures/hero.jpg",
};

/** All slideshow images in /public/pictures/ (slideshow1.jpg … slideshowN.jpg) */
export const SLIDESHOW_IMAGES = Array.from(
  { length: 9 },
  (_, i) => `/pictures/slideshow${i + 1}.jpg`,
);
