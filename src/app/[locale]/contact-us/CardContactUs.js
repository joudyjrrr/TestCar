import Image from "next/image";
import React from "react";

const CardContactUs = ({
  title,
  subtext,
  subtext2,
  img,
  classNameImg,
  classNameImgParent,
  classNameImgFont,
}) => {
  return (
    <div className="bg-[#f2faff] rounded-[30px] py-6 px-6 ">
      <div className="flex items-center gap-4">
        <div className={`rounded-full p-3  ${classNameImgParent}`}>
          <Image
            alt=""
            src={img}
            className={`w-8 h-8  ${classNameImg} max-sm:!w-10 max-sm:!h-10`}
          />
        </div>
        <div className="flex justify-center  flex-col ">
          <h1 className="text-gray-500 font-medium text-lg"> {title}</h1>
          <div className={`text-lg font-semibold ${classNameImgFont}`}>
            <p>{subtext}</p>
            <p>{subtext2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContactUs;
