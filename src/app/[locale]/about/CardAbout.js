import Image from "next/image";
import React from "react";

const CardAbout = ({ title, img, content  , classNameImg}) => {
  return (
    <div className="bg-[#f2faff] rounded-[30px] p-4 px-6 ">
      <div className="flex gap-2 items-center ">
        <Image alt="" src={img} className={`w-20 h-20  ${classNameImg} max-sm:!w-10 max-sm:!h-10`} />
        <h1 className="text-primary font-semibold text-3xl"> {title}</h1>
      </div>
      <div className="  text-2xl max-sLg:text-xl max-sm:text-base max-sm:px-4 flex flex-col gap-1 font-medium text-[#575757]">
        {content}
      </div>
    </div>
  );
};

export default CardAbout;
