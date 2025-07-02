import React from "react";
import { BsEnvelope } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import { useTranslations } from 'next-intl';

const FirstHeader = () => {
  const t = useTranslations('header');

  return (
    <div className="bg-secondary  z-[100] text-white w-full h-[50px] py-2 pe-10 ps-6 max-sm:pe-2 max-sm:ps-1">
      <div className="flex justify-between w-full h-full items-center">
        <div className="flex items-center">
          <div className="flex border-e border-white pe-2 items-center  gap-2">
            <BsEnvelope className="text-xl " />
            <p className="text-[17px] max-sm:text-sm font-semibold">
              HQ<span className="text-base max-sm:text-sm">@altaalouf.org</span>
            </p>
          </div>
          <div className="flex border-e h-full border-white px-2 items-center max-sm:border-none  gap-2 max-sm:gap-1">
            <FaPhoneAlt />
            <p className="font-semibold max-sm:text-xs" dir="ltr">
              +963 930 099 334
            </p>
          </div>
          <div className="flex px-2 items-center gap-2 max-sm:hidden">
            <CiClock1 className="text-2xl " />
            <p className="font-semibold">{t('days')}</p>
            <p className="font-semibold">
              {t('start')} - {t('end')}
            </p>
          </div>
        </div>
        <div className="flex text-white text-lg max-sm:text-lg items-center gap-2 cursor-pointer">
          <FaFacebookF />
          <FaLinkedinIn />
        
        </div>
      </div>
    </div>
  );
};

export default FirstHeader;
