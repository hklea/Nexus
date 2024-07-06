import SingleService from "./SingleService";
import ServiceData from "./ServicesData";

const Services = () => {
  return (
    <>
      <div className="bg-[#C3D0DA]">
        <section
          id="features"
          className="py-32 md:py-20 lg:py-26 md:pt-16 lg:pt-16   bg-[#C3D0DA]"
        >
          <div className="mt-[-65px] xs:mt-[-65px] sm:mt-[-75px] md:mt-[-5px] flex justify-center text-center">
            <div className="rounded-[20px] w-[120px] h-[24px] text-white bg-[#9BB5C8] font-lato font-normale">
              Services
            </div>
          </div>
          <div className=" mt-[5px] text-[#181818] font-semibold text-[27px] md:text-[30px] lg:text-[37px] flex justify-center text-center">
            <div>Get Control Over Your Business </div>
          </div>

          <div className="container sm:pl-[90px] sm:pr-[90px] mt-[30px]">
            <div className=" grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {ServiceData.map((feature) => (
                <SingleService key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
