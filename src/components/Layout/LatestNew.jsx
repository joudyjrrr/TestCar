"use client";
import React, { useEffect, useState } from "react";
import Title from "./Title";
import { megaphone, s1, s2, s3 } from "../../../public/images";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const dataKeys = [
  {
    img: s1,
    titleKey: "news.card3.title",
    dateKey: "news.card1.date",
  },
  {
    img: s2,
    titleKey: "news.card1.title",
    dateKey: "news.card2.date",
  },
  {
    img: s3,
    titleKey: "news.card2.title",
    dateKey: "news.card3.date",
  },

  {
    img: s1,
    titleKey: "news.card1.title",
    dateKey: "news.card1.date",
  },
  {
    img: s2,
    titleKey: "news.card2.title",
    dateKey: "news.card2.date",
  },
];

const LatestNew = () => {
  const t = useTranslations();
  const [currentIndex, setCurrentIndex] = useState(0);
  const pathName = usePathname();
  // console.log(pathName)
  const slidesPerView = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? dataKeys.length - slidesPerView : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + slidesPerView >= dataKeys.length ? 0 : prev + 1
    );
  };

  const visibleSlides = dataKeys.slice(
    currentIndex,
    currentIndex + slidesPerView
  );
  const slidesToShow =
    visibleSlides.length < slidesPerView
      ? [
          ...visibleSlides,
          ...dataKeys.slice(0, slidesPerView - visibleSlides.length),
        ]
      : visibleSlides;

  return (
    <div className="my-[50px] py-8 relative">
      <Title
        title={t("news.title")}
        img={megaphone}
        className1="!ps-24"
        className2={`start-[15px] top-[-9px]`}
      />

      <div className="grid grid-cols-3 gap-10 max-sLg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 justify-center w-fit mx-auto px-24 max-sLg:px-4 max-sm:px-4 transition-all duration-500">
        {slidesToShow.map((d, i) => (
          <div
            key={i}
            className="flex flex-col rounded-[40px] bg-white shadow-md h-[445px]"
          >
            <Image alt="" src={d.img} className="rounded-t-[40px] h-[280px]" />
            <div className="flex flex-col py-2 px-4">
              <h1 className="text-primary text-xl font-semibold">
                {t(d.titleKey)}
              </h1>
              <div className="flex gap-2 items-center mt-4">
                <CiClock1 className="text-2xl text-secondary" />
                <p className="text-[#575757] text-lg font-medium">
                  {t(d.dateKey)}
                </p>
              </div>
            </div>
            <div className="flex gap-2 py-2 px-4 items-end h-full cursor-pointer justify-end">
              <p className="text-[#575757] text-lg">{t("news.readMore")}</p>
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
        {Array.from({ length: Math.ceil(dataKeys.length / slidesPerView) }).map(
          (_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx * slidesPerView)}
              className={`bg-secondary rounded-full transition-all duration-300 ${
                currentIndex / slidesPerView === idx ? "w-10 h-10" : "w-8 h-8"
              }`}
            ></button>
          )
        )}
      </div>
    </div>
  );
};

export default LatestNew;
