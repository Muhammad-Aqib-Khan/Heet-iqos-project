"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface BannerItem {
  src: string;
  alt: string;
  heading?: string;
  paragraph?: string;
  headingClassName?: string;
  paragraphClassName?: string;
}

interface BannerSliderProps {
  banners: BannerItem[];
  interval?: number;
  sliderHeight?: string; // e.g., h-screen, h-[500px]
}

const BannerSlider: React.FC<BannerSliderProps> = ({
  banners,
  interval = 5000,
  sliderHeight = "h-screen",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prev) => (prev + 1) % banners.length);
    }
  }, [banners.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prev) => (prev - 1 + banners.length) % banners.length);
    }
  }, [banners.length, isTransitioning]);

  const goToSlide = useCallback(
    (index: number) => {
      if (!isTransitioning && index !== activeIndex) {
        setIsTransitioning(true);
        setActiveIndex(index);
      }
    },
    [activeIndex, isTransitioning]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, interval);
    return () => clearInterval(timer);
  }, [activeIndex, interval, nextSlide]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  if (banners.length === 0) {
    return <div className="text-center text-gray-500 py-10">No banners available</div>;
  }

  return (
    <div className={`relative w-full overflow-hidden ${sliderHeight}`}>
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={banner.src}
            alt={banner.alt}
            fill
            className="object-cover w-full h-full"
            priority={index === 0}
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-center text-white px-4">
            {banner.heading && (
              <h1 className={`text-3xl md:text-5xl font-bold ${banner.headingClassName ?? ""}`}>
                {banner.heading}
              </h1>
            )}
            {banner.paragraph && (
              <p className={`mt-4 text-base md:text-lg ${banner.paragraphClassName ?? ""}`}>
                {banner.paragraph}
              </p>
            )}
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white p-2 rounded-full z-10"
        aria-label="Previous slide"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white p-2 rounded-full z-10"
        aria-label="Next slide"
      >
        &#10095;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
