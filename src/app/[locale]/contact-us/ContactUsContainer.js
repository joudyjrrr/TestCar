"use client";
import BannerForBage from "@/components/Layout/BannerForBage";
import { useLocale, useTranslations } from "next-intl";
import React, { useRef, useState } from "react";
import {
  contct,
  email,
  facebook,
  linkedin,
  map,
  phone,
  pin,
  time,
  twitter,
} from "../../../../public/images";
import FirstHeader from "@/components/Layout/FirstHeader";
import SecondHeader from "@/components/Layout/SecondHeader";
import CardContactUs from "./CardContactUs";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import Title from "@/components/Layout/Title";

import dynamic from "next/dynamic";
import Footer from "@/components/Layout/Footer";
import useScrollDirection from "@/i18n/useScrollDirection";
const MapHalab = dynamic(() => import("./MapWithMarkers"), {
  ssr: false,
});

const ContactUsContainer = () => {
  const t = useTranslations();
  const atTop = useScrollDirection();
  return (
    <div className="w-full h-full ">
      <FirstHeader />
      <SecondHeader scrollDirection={atTop} />
      <div className={`w-full overflow-x-hidden z-[50] relative `}>
        <BannerForBage
          img={contct}
          isPhone={false}
          titleHead={"contact2.title"}
          classNameGr="!from-black/80"
          classNameTitle="text-7xl"
        />
        <div className="flex max-sm:px-2 max-xsLg:flex-col mt-16 w-full px-16 gap-24 justify-between">
          <div className="flex flex-col">
            <h1 className="text-5xl max-sm:text-3xl font-bold text-primary">
              {t("contact2.suggestionTitle")}
            </h1>
            <div className="flex flex-col text-[#575757] mt-4 text-xl  max-sm:text-sm font-medium">
              <p>{t("contact2.messageLine1")}</p>
              <p>{t("contact2.messageLine2")}</p>
            </div>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-3 gap-8 mt-4">
              <CardContactUs
                img={phone}
                title={t("contact2.callUs")}
                subtext={"+963 930 099 034"}
                classNameImgFont="text-primary"
                classNameImgParent="bg-primary p-2"
              />
              <CardContactUs
                img={pin}
                title={t("contact2.location")}
                subtext={t("contact2.address1")}
                subtext2={t("contact2.address2")}
                classNameImgParent="bg-white p-2"
                classNameImgFont="text-primary"
              />
              <CardContactUs
                img={email}
                title={t("contact2.emailUs")}
                subtext="HQ@altaalouf.org"
                classNameImgParent="bg-white p-2"
                classNameImgFont="text-secondary"
              />
              <CardContactUs
                img={time}
                title={t("contact2.workingHours")}
                subtext={t("header2.days")}
                subtext2={`${t("header2.start")} - ${t("header2.end")}`}
                classNameImgParent="bg-white p-2"
                classNameImgFont="text-primary"
              />
            </div>
            <div className="flex justify-center items-center mt-12 gap-4">
              <Image alt="Facebook" src={facebook} className="w-8 h-8" />
              <Image alt="Twitter" src={twitter} className="w-8 h-8" />
              <Image alt="LinkedIn" src={linkedin} className="w-8 h-8" />
            </div>
          </div>

          <div className="bg-primary text-white px-8 py-8 pb-4 rounded-[30px]">
            <h1 className="text-5xl font-bold">{t("contact2.details")}</h1>
            <p className="text-xl mt-6">{t("contact2.optionalInfo")}</p>
            <div className="grid grid-cols-2 gap-8 mt-6">
              <input
                placeholder={t("form.firstName")}
                className="border-b-2 border-white outline-none placeholder:text-base py-2 bg-transparent px-2 placeholder:text-white text-white"
              />
              <input
                placeholder={t("form.lastName")}
                className="border-b-2 border-white outline-none placeholder:text-base py-2 bg-transparent px-2 placeholder:text-white text-white"
              />
              <input
                placeholder={t("form.email")}
                className="border-b-2 border-white outline-none placeholder:text-base py-2 bg-transparent px-2 placeholder:text-white text-white"
              />
              <input
                placeholder={t("form.phone")}
                className="border-b-2 border-white outline-none placeholder:text-base py-2 bg-transparent px-2 placeholder:text-white text-white"
              />
            </div>
            <textarea
              rows={6}
              placeholder={t("form.message")}
              className="border-b-2 w-full mt-4 border-white outline-none placeholder:text-base py-2 bg-transparent px-2 placeholder:text-white text-white"
            />
            <div className="flex w-full justify-end pt-8">
              <button className="bg-white font-semibold me-12 gap-2 items-center flex text-primary text-xl border-none outline px-4 py-1 rounded-[15px]">
                {t("form.send")}
                <div className="bg-primary text-sm w-fit h-fit text-white px-1 !py-1 flex justify-center items-center rounded-[5px]">
                  <FaArrowLeft className="text-sm p-0" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <Title
            title={t("contact2.locationsTitle")}
            img={map}
            className1="ps-20"
            className2="w-[65px] h-[65px] start-[5px] top-[-8px]"
          />
          <div className="mt-8 h-[500px] max-sm:h-[300px]">
            <MapHalab />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUsContainer;
