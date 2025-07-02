"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { altaalouf, logo1, logoDark } from "../../../public/images";
import Image from "next/image";
import Link from "next/link";
import { BsEnvelope } from "react-icons/bs";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import { Button } from "../ui/button";

const Footer = () => {
  const t = useTranslations("footer");
  const links = [
    { label: t("links.home"), href: "/" },
    { label: t("links.about"), href: "/about" },
    { label: t("links.Policies"), href: "/donations" },
    { label: t("links.news"), href: "/news" },
    { label: t("links.contact"), href: "/contact" },
    { label: t("links.careers"), href: "/careers" },
    { label: t("links.projects"), href: "/projects" },
  ];

  return (
    <>
      <div className="w-full bg-primary pt-6 pb-8 px-8 ps-16 max-sLg:ps-4 relative">
        <div className="flex text-secondary py-4 px-4  text-lg flex-col cursor-pointer gap-6 absolute end-[-5px] top-[50px] bg-white rounded-s-3xl">
          <FaFacebookF />
          <FaLinkedinIn />
          <FaTwitter />
        </div>

        <div className="grid grid-cols-3 max-sm:grid-cols-1 justify-center mx-auto gap-4 w-full ">
          {" "}
          {/* Logo & Newsletter */}
          <div className="flex flex-col w-full">
            <div className="flex items-center gap-2 ">
             <Image className="w-[240px]" src={logo1} alt="logo" />
              {/* <div className="flex flex-col">
                <h1 className="text-3xl text-white  font-extrabold max-xsLg:text-lg">
                  {t("associationNameAr")}
                </h1>
                <span className="font-semibold text-sm  text-white">
                  {t("associationNameEn")}
                </span>
              </div> */}
            </div>
            <div>
              <p className="text-white font-medium text-xl mt-4">
                {t("description")} <br /> {t("description2")}
              </p>
            </div>
            <div className="flex flex-col mt-4">
              <h1 className="text-white font-semibold text-xl ">
                {t("newsletter.title")}:
              </h1>
              <div className="flex mt-4 gap-2 ">
                <input
                  placeholder={t("newsletter.placeholder")}
                  className="bg-white rounded-[30px] px-2 py-1 border-none outline-none placeholder:text-gray-500"
                />
                <Button>{t("newsletter.subscribe")}</Button>
              </div>
            </div>
          </div>
          {/* Links */}
          <div className="flex w-full flex-col ">
            <h1 className="text-white font-semibold text-3xl max-xsLg:text-2xl">
              {t("importantLinks")}
            </h1>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {links.map((li, i) => (
                <Link
                  href={li.href}
                  key={i}
                  className="text-white text-xl max-sLg:text-sm font-medium text-nowrap"
                >
                  - {li.label}
                </Link>
              ))}
            </div>
          </div>
          {/* Contact */}
          <div className="flex flex-col w-full">
            <h1 className="text-white font-semibold text-3xl max-xsLg:text-2xl">
              {t("contactUs")}
            </h1>
            <div className="flex gap-4 mt-4 text-white flex-col">
              <div className="flex pe-2 items-center gap-2">
                <BsEnvelope className="text-2xl " />
                <p className="text-xl max-sLg:text-lg  font-medium">
                  HQ@altaalouf.org
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-xl " />
                <p className="text-xl max-sLg:text-lg  font-medium" dir="ltr">
                  +963 930 099 334
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CiClock1 className="text-2xl  " />
                <div className="flex flex-col gap-1">
                  <p className="font-medium text-xl max-sLg:text-lg">
                    {t("days")}
                  </p>
                  <p className="font-medium text-xl max-sLg:text-lg">
                    {t("workingHours")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-secondary font-medium py-2 w-full flex justify-center items-center">
        <h1 className="text-xl max-sm:text-base text-white">{t("rights")}</h1>
      </div>
    </>
  );
};

export default Footer;
