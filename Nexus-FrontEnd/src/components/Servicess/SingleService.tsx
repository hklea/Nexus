import { ServiceType } from "../../types/serviceType";
import { useState } from "react";

const SingleService = ({ feature }: { feature: ServiceType }) => {
  const { icon2 ,icon , title, paragraph } = feature;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="w-full p-[20px] pl-[29px] rounded-[20px] cursor-pointer bg-[#EBEBEB] hover:bg-[#181818]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`relative ${isHovered ? "text-white" : ""}`}>
        <div className="mb-[5px] mt-[10px] flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {isHovered ? icon2 : icon}
        </div>
        <h3
          className={`ml-[2px] mb-[7px] text-xl font-semibold ${
            isHovered ? "text-white" : "text-[#181818]"
          }  sm:text-2xl lg:text-xl xl:text-xxl`}
        >
          {title}
        </h3>
        <p
          className={`pr-[10px]  ${
            isHovered ? "text-white" : "text-[#595566]"
          } text-base font-lato leading-relaxed text-[13px]`}
        >
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleService;
