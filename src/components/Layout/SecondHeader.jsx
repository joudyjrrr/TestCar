"use client";

import React, { useState } from "react";
import { logo1, logoDark } from "../../../public/images";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { IoClose, IoMenu } from "react-icons/io5";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { useAppContext } from "@/lib/AppContext";
import { usePathname, useRouter } from "next/navigation";

const SecondHeader = ({ scrollDirection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("header2");
  const pathname = usePathname();
  const currentPath = pathname.split("/").slice(2).join("/") || "/";
  console.log(currentPath);
  const router = useRouter();

  const Links = [
    { title: t("home"), to: "/" },
    { title: t("about"), to: "/about" },
    { title: t("projects"), to: "/project" },
    { title: t("news"), to: "/news" },
    { title: t("contact"), to: "/contact-us" },
    { title: t("jobs"), to: "/employee" },
    { title: t("Policies"), to: "/project" },
  ];

  return (
    <div
      className={`bg-primary z-[100] fixed ${
        scrollDirection ? " top-[50px]" : " top-[0px]"
      } left-0 h-[90px] w-full transition-transform duration-300 `}
    >
      <div className="flex justify-between items-center w-full pt-2 pe-10 ps-4 max-sm:pe-2 max-sm:ps-1">
        <div className="flex gap-4 items-center text-white mt-2">
          <Image className="w-[230px]" src={logo1} alt="logo" />
          <div className="flex flex-col max-xsLg:hidden">
            {/* <h1 className="text-2xl font-extrabold max-sm:text-base">
              {t("associationNameAr")}
            </h1> */}
            {/* <span className="font-semibold text-xs">{t("associationNameEn")}</span> */}
          </div>
        </div>

        <div className="flex items-center gap-6 max-sLg:gap-2 max-xsLg:hidden">
          {Links.map((li, i) => (
            <Link
              href={li.to}
              key={i}
              className={`text-white text-base font-medium whitespace-nowrap ${
                li.to.includes(currentPath) ? "!font-extrabold" : ""
              }`}
            >
              {li.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 max-sm:gap-1">
          <Button onClick={() => router.push("/donations")} className="text-sm">
            {t("donateNow")}
          </Button>
          <LanguageSwitcher />
          <div className="hidden max-xsLg:flex items-center gap-4">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <IoClose className="text-white text-2xl" />
              ) : (
                <IoMenu className="text-white text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="z-[10000000] absolute top-[90px] left-0 w-full bg-primary text-white flex flex-col gap-4 py-4 px-6">
          {Links.map((li, i) => (
            <Link
              href={li.to}
              key={i}
              className={`text-sm font-medium ${
                li.to.includes(currentPath) ? "!font-extrabold" : ""
              }`}
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
