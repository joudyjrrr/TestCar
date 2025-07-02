"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { bannerImg, Donations } from "../../../public/images";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useTranslations, useLocale } from "next-intl";

const Banner = () => {
  const t = useTranslations("banner");
  const locale = useLocale();
  const isEnglish = locale === "en";

  const images = [{ img: bannerImg }];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute top-[90px] left-0 w-full h-full z-0">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.img}
            alt={`Slide ${index + 1}`}

            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            } ${isEnglish ? "scale-x-[-1]" : ""}`}
            priority={index === 0}
          />
        ))}

        <div className="absolute bottom-0 z-[10] left-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="relative z-20 flex flex-col justify-between h-full">
        <div className="flex items-start h-full pt-24 px-6 md:px-16 text-white">
          <div className="flex mt-[70px] flex-col text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-semibold max-w-full">
            <h1>{t("we_make_difference")}</h1>
            <h1 className="mt-3">{t("what_about_you")}</h1>
            <Button className="w-fit text-lg sm:text-xl md:text-2xl mt-6 px-5 py-2">
              {t("join_now")}
            </Button>
          </div>
        </div>

        <div className="mb-4 flex gap-3 items-end justify-center">
          {images.map((_, index) => (
            <button
              key={index}
              className={`rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-6 h-6 bg-white"
                  : "w-4 h-4 bg-white/70"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-2 text-2xl sm:text-4xl top-[68%] transform -translate-y-1/2 text-white bg-white/30 p-2 sm:p-2 rounded-full z-30"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 sm:right-2 text-3xl sm:text-4xl top-[68%] transform -translate-y-1/2 text-white bg-white/30 p-2 sm:p-2 rounded-full z-30"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Banner;
