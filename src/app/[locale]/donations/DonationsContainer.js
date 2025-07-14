"use client";
import FirstHeader from "@/components/Layout/FirstHeader";
import SecondHeader from "@/components/Layout/SecondHeader";
import { useLocale, useTranslations } from "next-intl";
import React, { useRef, useState } from "react";
import {
  Donations,
  logo2,
  phonew,
  pin2,
  syria_internationa,
} from "../../../../public/images";
import BannerForBage from "@/components/Layout/BannerForBage";
import Image from "next/image";
import Footer from "@/components/Layout/Footer";
import useScrollDirection from "@/i18n/useScrollDirection";

const DonationsContainer = () => {
  const t = useTranslations("donations");
 
   const atTop = useScrollDirection();
  return (
    <div className="w-full h-full ">
      <FirstHeader />
      <SecondHeader scrollDirection={atTop} />
      <div className={`w-full overflow-x-hidden z-[50] relative `}>
        <BannerForBage
          img={Donations}
          isPhone={false}
          titleHead={"Donations.title"}
          classNameGr="!from-black/80"
          classNameTitle="!text-7xl max-sm:!text-6xl"
        />
        <div className="flex flex-col my-24 w-full text-center gap-6 justify-center items-center px-12 max-sm:px-6">
          <h1 className="text-5xl max-sm:text-3xl text-primary font-bold">{t("makeADifference")}</h1>
          <div className="flex flex-col !text-[#575757] text-2xl font-medium max-xsLg:text-xl max-mdd:!text-base">
            <p>{t("description1")}</p>
            <p>{t("description2")}</p>
            <p>{t("description3")}</p>
            <p>{t("description4")}</p>
          </div>

          <div className="flex gap-24 items-center max-sm:flex-col max-sm:gap-4">
            <Cardbanbk
              img={logo2}
              subTitle={t("alBaraka.title")}
              numA={t("alBaraka.accountNumber")}
              classNamePrent={`bg-[#fff2eb]`}
              classNameText={`text-[#e71737]`}
            />
            <Cardbanbk
              img={syria_internationa}
              subTitle={t("islamicBank.title")}
              numA={t("islamicBank.accountNumber")}
              classNamePrent={`bg-[#eff8f3]`}
              classNameText={`text-[#2da868]`}
            />
          </div>

          <p className=" !text-[#575757] text-2xl font-medium max-sm:text-base">
            {t("otherWaysToSupport")}
          </p>
          <div className="flex gap-24 items-center  max-sm:flex-col max-sm:gap-4">
            <div className="flex gap-4 items-center justify-start bg-[#ebf7ff] pe-10 ps-4 rounded-[30px] py-4 ">
              <div className="bg-primary rounded-[100%] p-4">
                <Image alt="" src={phonew} className={`w-8 h-8 `} />
              </div>

              <div className="flex flex-col ">
                <p className="!text-[#575757] text-start text-nowrap  text-xl font-medium">
                  {t("contact.title")}
                </p>
                <p className="!text-primary text-start   max-mdd:text-base text-xl font-semibold">
                  {t("contact.phone")}
                </p>
                <p className="!text-secondary text-start max-mdd:text-base  text-xl font-semibold">
                  {t("contact.email")}
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-center justify-start bg-[#ffffe5] pe-10 ps-4 rounded-[30px] py-4 ">
              <div className="bg-white rounded-[100%] p-4">
                <Image alt="" src={pin2} className={`w-8 h-8 `} />
              </div>

              <div className="flex flex-col ">
                <p className="!text-[#575757] text-nowrap text-start  text-xl font-medium">
                  {t("location.title")}
                </p>
                <p className="!text-secondary text-start text-xl max-mdd:text-base font-semibold">
                  {t("location.address1")}
                </p>
                <p className="!text-secondary text-start text-xl max-mdd:text-base font-semibold">
                  {t("location.address2")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DonationsContainer;

const Cardbanbk = ({
  img,
  numA,
  subTitle,
  classNamePrent,
  classNameText,
  classNameImg,
}) => {
  return (
    <div
      className={`bg-[#fff2eb] px-8 rounded-[30px] py-2 flex flex-col justify-center items-center gap-3 ${classNamePrent}`}
    >
      <Image alt="" src={img} className={`w-32 h-18 ${classNameImg}`} />
      <p className="text-[#575757] text-xl font-medium">{subTitle}</p>
      <p className={`font-bold text-2xl ${classNameText}`}>{numA}</p>
    </div>
  );
};
