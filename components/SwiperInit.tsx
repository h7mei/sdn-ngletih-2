"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Swiper?: new (
      selector: string,
      options: Record<string, unknown>
    ) => unknown;
  }
}

const MAX_SLIDES_PER_VIEW = 3;

function initSwiper(
  selector: string,
  options: Record<string, unknown>
) {
  const el = document.querySelector(selector);
  if (!el || el.classList.contains("swiper-initialized") || !window.Swiper) {
    return;
  }

  const slideCount = el.querySelectorAll(".swiper-slide").length;
  const canLoop = slideCount > MAX_SLIDES_PER_VIEW;

  new window.Swiper(selector, {
    ...options,
    loop: canLoop,
  });
}

export default function SwiperInit() {
  useEffect(() => {
    const init = () => {
      if (typeof window === "undefined" || !window.Swiper) return;

      initSwiper(".ekstraSwiper", {
        slidesPerView: 1,
        spaceBetween: 25,
        autoplay: { delay: 3000, disableOnInteraction: false },
        breakpoints: {
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        },
      });

      initSwiper(".galeriSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: { delay: 3000, disableOnInteraction: false },
        breakpoints: {
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        },
      });
    };

    if (window.Swiper) {
      init();
      return;
    }

    const existing = document.querySelector(
      'script[data-swiper="cdn"]'
    ) as HTMLScriptElement | null;

    if (existing) {
      existing.addEventListener("load", init);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
    script.async = true;
    script.dataset.swiper = "cdn";
    script.onload = init;
    document.body.appendChild(script);
  }, []);

  return null;
}
