"use client";
import React, { useEffect, useState } from "react";
import Title from "./Title";
import { megaphone, projectmanagement, op, coma } from "../../../public/images";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useTranslations } from "next-intl";

const PartnersOpinions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesPerView = 1;

  const t = useTranslations("partners");

  const data = [
    {
      img: op,
      name: t("card1.name"),
      position: t("card1.position"),
      content: t("card1.content"),
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
      ? [...visibleSlides, ...data.slice(0, slidesPerView - visibleSlides.length)]
      : visibleSlides;

  return (
    <div className="my-[50px] py-8 relative">
      <Title
        title={t("title")}
        img={projectmanagement}
        className1="!ps-24"
        className2="start-[10px] top-[-9px] w-[75px] h-[75px]"
      />

      <div className="flex w-[93%] max-sm:w-[98%] justify-center mx-auto px-24  max-sLg:px-4 transition-all duration-500">
        {slidesToShow.map((d, i) => (
          <div
            key={i}
            className="bg-white relative rounded-[35px] border-2 border-secondary px-24 max-sLg:px-4   max-sm:px-2   py-8 flex flex-col"
          >
            <Image
              alt=""
              src={coma}
              className="absolute w-[90px] top-[-40px] start-[140px]"
            />
            <div className="flex gap-3">
              <Image
                alt=""
                src={d.img}
                className="h-[100px] w-[100px] max-sm:h-[70px] max-sm:w-[70px] object-cover rounded-full"
              />
              <div className="flex flex-col text-primary text-2xl max-sm:text-base font-semibold">
                <h1>{d.name}</h1>
                <h1>{d.position}</h1>
              </div>
            </div>
            <p className="text-center mt-2 text-2xl  max-sm:text-base font-medium text-[#575757]">
              {d.content}
            </p>
          </div>
        ))}
      </div>

        <button
           onClick={handlePrev}
           className="absolute end-2 max-sLg:end-1 w-16 h-16 max-sLg:w-8 max-sLg:h-8 max-sLg:text-2xl text-center text-5xl flex justify-center items-center top-1/2 transform -translate-y-1/2 text-primary bg-primary/15 rounded-full z-30"
         >
           <IoIosArrowBack />
         </button>
         <button
           onClick={handleNext}
           className="absolute start-2 max-sLg:start-1 w-16 h-16 max-sLg:w-8 max-sLg:h-8 max-sLg:text-2xl text-center text-5xl flex justify-center items-center top-1/2 transform -translate-y-1/2 text-primary bg-primary/15 rounded-full z-30"
         >
           <IoIosArrowForward />
         </button>

      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: Math.ceil(data.length / slidesPerView) }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx * slidesPerView)}
            className={`bg-primary rounded-full transition-all duration-300 ${
              currentIndex / slidesPerView === idx ? "w-10 h-10" : "w-8 h-8"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default PartnersOpinions;
