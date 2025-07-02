"use client";
import React, { useEffect, useState } from "react";
import Title from "./Title";
import {
  handshake1,
  megaphone,
  oc,
  projectmanagement,
  s3,
  s4,
  s5,
  s6,
  un,
  UN_Habitat,
  unhcr,
  UNHCR_Logo,
  unicef,
  United_Nations_Office_for,
  wfp,
  wfp2,
  wh,
  WHO_logo,
} from "../../../public/images";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useTranslations } from "next-intl";

const data = [
  {
    img: un,
  },
  {
    img: oc,
  },
  {
    img: unhcr,
  },
 
  {
    img: wh,
  },
  {
    img: wfp2,
  },

  
  
];

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesPerView = 6;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? data.length - slidesPerView : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + slidesPerView >= data.length ? 0 : prev + 1
    );
  };

  const visibleSlides = data.slice(currentIndex, currentIndex + slidesPerView);
  const slidesToShow =
    visibleSlides.length < slidesPerView
      ? [
          ...visibleSlides,
          ...data.slice(0, slidesPerView - visibleSlides.length),
        ]
      : visibleSlides;
  const t = useTranslations();
  return (
    <div className="my-[50px] py-8 relative">
      <Title
        title={t("parthners")}
        img={handshake1}
        className1="!ps-24"
        className2={`start-[10px] top-[-9px] w-[75px] h-[75px]`}
      />

      <div className="grid grid-cols-6 max-sLg:grid-cols-3 gap-12 max-md:grid-cols-2 max-sm:grid-cols-1 justify-center w-fit mx-auto px-24 max-sLg:px-4  transition-all duration-500">
        {slidesToShow.map((d, i) => (
          <div key={i} className="">
            <Image alt="" src={d.img} className="h-[150px] " />
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute end-2 max-sLg:end-1 w-16 h-16 max-sLg:w-8 max-sLg:h-8 max-sLg:text-2xl text-center text-5xl flex justify-center items-center top-1/2 transform -translate-y-1/2 text-secondary bg-secondary/15 rounded-full z-30"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={handleNext}
        className="absolute start-2 max-sLg:start-1 w-16 h-16 max-sLg:w-8 max-sLg:h-8 max-sLg:text-2xl text-center text-5xl flex justify-center items-center top-1/2 transform -translate-y-1/2 text-secondary bg-secondary/15 rounded-full z-30"
      >
        <IoIosArrowForward />
      </button>

      <div className="flex justify-center mt-12 gap-2">
        {Array.from({ length: Math.ceil(data.length / slidesPerView) }).map(
          (_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx * slidesPerView)}
              className={` bg-secondary rounded-full transition-all duration-300 ${
                currentIndex / slidesPerView === idx ? "w-10 h-10" : "w-8 h-8"
              }`}
            ></button>
          )
        )}
      </div>
    </div>
  );
};

export default Partners;