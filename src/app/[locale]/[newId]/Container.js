"use client";
import FirstHeader from "@/components/Layout/FirstHeader";
import SecondHeader from "@/components/Layout/SecondHeader";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { c1, f1, n1, s1, s2, s3, x3 } from "../../../../public/images";
import LatestNew from "@/components/Layout/LatestNew";
import Footer from "@/components/Layout/Footer";
import { MdArrowBackIos } from "react-icons/md";
import { useRouter } from "next/navigation";
import useLanguageDirection from "@/i18n/useLanguageDirection";
import useScrollDirection from "@/i18n/useScrollDirection";
const Container = () => {
  useLanguageDirection();
  const t = useTranslations();
  const atTop = useScrollDirection()
  return (
       <div className="w-full h-full ">
      <FirstHeader />
      <SecondHeader scrollDirection={atTop} />
      <div className={`w-full overflow-x-hidden z-[50] relative `}>
        <div className="flex gap-2 font-medium mt-[120px]   px-14  cursor-pointer items-center text-[#575757] text-sm">
          <span>{t("news.home")}</span>
          <MdArrowBackIos
            onClick={() => {
              router.push("/");
            }}
          />
          <span>{t("news.news")}</span>
          <MdArrowBackIos
            onClick={() => {
              router.push("/news");
            }}
          />
          <span>{t("news.centerOpening")}</span>
        </div>
        <div className="text-primary px-14 mt-4 max-sm:text-xl font-semibold text-3xl">
          <h1>{t("news.opning")}</h1>
        </div>
        <div className="w-full mt-4  px-14">
          <Image
            src={s3}
            alt=""
            className="w-full h-[500px] rounded-3xl object-cover"
          />
        </div>

        <div className="flex w-full justify-between mt-10  px-14">
          <span className="text-black font-medium max-sm:text-xs ">
            {t("news.dateAndLocation")}
          </span>
          <div className="flex gap-2 items-center">
            <Image src={f1} alt="" className="w-6 h-6" />
            <Image src={c1} alt="" className="w-6 h-6" />
            <Image src={n1} alt="" className="w-6 h-6" />
            <Image src={x3} alt="" className="w-6 h-6" />
          </div>
        </div>
        <div className="flex flex-col text-[#575757] font-medium text-xl mt-4 max-sm:text-base   px-14">
          <p>{t("news.paragraphs.p1")}</p>
          <p>{t("news.paragraphs.p2")}</p>
          <p>{t("news.paragraphs.p3")}</p>
          <p>{t("news.paragraphs.p4")}</p>
          <p>{t("news.paragraphs.p5")}</p>
          <p>{t("news.paragraphs.p6")}</p>
          <p>{t("news.paragraphs.p7")}</p>
          <p>{t("news.paragraphs.p8")}</p>
          <p>{t("news.paragraphs.p9")}</p>
          <p>{t("news.paragraphs.p10")}</p>
          <p>{t("news.paragraphs.p11")}</p>
        </div>
        <div className="w-full flex flex-col mt-[50px]   max-sm:px-0">
          <h3 className="text-primary  font-semibold px-14  text-3xl ">
            {t("news.relatedNews")}
          </h3>
          <LatestNew />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Container;
