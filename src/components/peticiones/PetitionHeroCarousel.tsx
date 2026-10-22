import { useEffect, useRef, useState } from "react";

const CAROUSEL_IMAGES = [
  "/images/petitions/manos-luz.png",
  "/images/petitions/manos-oracion.png",
  "/images/petitions/vela-encendida.png",
];

const ROTATION_INTERVAL_MS = 7000;
const TRANSITION_MS = 320;

function imageKind(src: string): "prayer" | "candle" {
  return src.includes("vela-encendida") ? "candle" : "prayer";
}

/**
 * Hero image carousel for the petitions page. Rotates through a fixed set
 * of images every few seconds, preloading the next image before swapping
 * it in. Respects `prefers-reduced-motion` by disabling the rotation.
 */
export default function PetitionHeroCarousel() {
  const [currentImage, setCurrentImage] = useState(CAROUSEL_IMAGES[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const currentImageRef = useRef(currentImage);

  useEffect(() => {
    currentImageRef.current = currentImage;
  }, [currentImage]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    if (prefersReducedMotion.matches) return;

    const intervalId = window.setInterval(() => {
      if (document.hidden || CAROUSEL_IMAGES.length < 2) return;
      const options = CAROUSEL_IMAGES.filter(
        (src) => src !== currentImageRef.current,
      );
      const nextImage = options[Math.floor(Math.random() * options.length)];
      if (!nextImage) return;

      const preloadedImage = new Image();
      preloadedImage.src = nextImage;
      const showNextImage = () => {
        setIsTransitioning(true);
        window.setTimeout(() => {
          setCurrentImage(nextImage);
          setIsTransitioning(false);
        }, TRANSITION_MS);
      };

      if (preloadedImage.complete) showNextImage();
      else
        preloadedImage.addEventListener("load", showNextImage, { once: true });
    }, ROTATION_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <figure
      className="petition-hero-visual"
      data-kind={imageKind(currentImage)}
      aria-hidden="true"
    >
      <img
        src={currentImage}
        alt=""
        width={762}
        height={1244}
        fetchPriority="high"
        decoding="async"
        className={isTransitioning ? "is-transitioning" : undefined}
      />
      <span className="petition-candle-glow" aria-hidden="true" />
      <span className="petition-candle-flame" aria-hidden="true" />
    </figure>
  );
}
