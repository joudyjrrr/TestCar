"use client";
import React, { useEffect, useState } from "react";
import Title from "./Title";
import {
  megaphone,
  projectmanagement,
  s3,
  s4,
  s5,
  s6,
} from "../../../public/images";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const SuperiorProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesPerView = 3;
  const pathName = usePathname();
  const t = useTranslations("projects");

  const data = [
    {
      img: s4,
      title: t("card1.title"),
      date: t("card1.date"),
    },
    {
      img: s5,
      title: t("card2.title"),
      date: t("card2.date"),
    },
    {
      img: s6,
      title: t("card3.title"),
      date: t("card3.date"),
    },
    {
      img: s4,
      title: t("card4.title"),
      date: t("card4.date"),
    },
  ];

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

  return (
    <div className="my-[50px] py-8 relative">
      <Title
        title={t("title")}
        img={projectmanagement}
        className1="!ps-24"
        className2={`start-[10px] top-[-9px] w-[75px] h-[75px]`}
      />

      <div className="grid grid-cols-3 gap-10 max-sLg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 justify-center w-fit mx-auto px-24 max-sLg:px-4 max-sm:px-4 transition-all duration-500">
        {slidesToShow.map((d, i) => (
          <div
            key={i}
            className="flex flex-col rounded-[40px] bg-white shadow-md h-[420px]"
          >
            <Image alt="" src={d.img} className="rounded-t-[40px] h-[280px]" />
            <div className="flex flex-col py-2 px-4">
              <h1 className="text-primary text-xl font-semibold">{d.title}</h1>
              <div className="flex gap-2 items-center mt-6">
                <CiClock1 className="text-2xl text-secondary" />
                <p className="text-[#575757] text-lg font-medium">{d.date}</p>
              </div>
            </div>
            <div className="flex gap-2 pb-4 pe-4 items-end h-full cursor-pointer justify-end">
              <p className="text-[#575757] text-lg">{t("readMore")}</p>
              <FaArrowLeft
                className={`text-xl text-secondary  ${
                  pathName.includes("en") && " transform rotate-180"
                }`}
              />
            </div>
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

      <div className="flex justify-center mt-8 gap-2">
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

export default SuperiorProjects;
