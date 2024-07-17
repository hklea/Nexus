import { AboutUsType } from "../../types/serviceType";

const SingleContainer = ({ feature }: { feature: AboutUsType }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-full p-[20px] pl-[29px] rounded-[20px] cursor-pointer bg-white ">
      <div className={`relative `}>
        <div className="bg-transparent mb-[5px] mt-[10px] flex h-[70px] w-[70px] items-center justify-center rounded-md  bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3
          className={`text-nowrap ml-[2px] mb-[7px] text-xl font-semibold text-[#595566] sm:text-xl lg:text-xl xl:text-xxl`}
        >
          {title}
        </h3>
        <p
          className={`pr-[10px] text-[#595566] text-base font-lato leading-relaxed text-[13px]`}
        >
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleContainer;
