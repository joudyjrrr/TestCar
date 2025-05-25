"use client";

import React, { useState } from "react";
import { logoDark } from "../../../public/images";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { IoClose, IoMenu } from "react-icons/io5";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { useAppContext } from "@/lib/AppContext";

const SecondHeader = ({scrollDirection}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("header2");

  const Links = [
    { title: t("home"), to: "/" },
    { title: t("about"), to: "/about" },
    { title: t("projects"), to: "/project" },
    { title: t("news"), to: "/project" },
    { title: t("contact"), to: "/contact-us" },
    { title: t("jobs"), to: "/project" },
    { title: t("Policies"), to: "/project" },
  ];


  const hideHeader = scrollDirection === "down";

  return (
    <div
      className={`bg-primary z-[100] fixed transform  h-[90px] w-full transition-transform duration-300  ${
     hideHeader ? "translate-y-[-59%]" : "translate-y-0"
      }`}
    >
      <div className="flex justify-between items-center w-full pt-2 pe-10 ps-4 max-sm:pe-2 max-sm:ps-1">
        <div className="flex gap-4 items-center text-white">
          <Image className="w-[70px]" src={logoDark} alt="logo" />
          <div className="flex flex-col max-xsLg:hidden">
            <h1 className="text-3xl font-extrabold max-sm:text-lg">
              {t("associationNameAr")}
            </h1>
            <span className="font-semibold text-sm">{t("associationNameEn")}</span>
          </div>
        </div>

        <div className="flex items-center gap-6 max-sLg:gap-2 max-xsLg:hidden">
          {Links.map((li, i) => (
            <Link
              href={li.to}
              key={i}
              className="text-white text-lg font-medium whitespace-nowrap"
            >
              {li.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 max-sm:gap-1">
          <Button>{t("donateNow")}</Button>
          <LanguageSwitcher />
          <div className="hidden max-xsLg:flex items-center gap-4">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <IoClose className="text-white text-3xl" />
              ) : (
                <IoMenu className="text-white text-3xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div  className="z-[10000000] absolute top-[90px] left-0 w-full bg-primary text-white flex flex-col gap-4 py-4 px-6">
          {Links.map((li, i) => (
            <Link
              href={li.to}
              key={i}
              className="text-base font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {li.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SecondHeader;
