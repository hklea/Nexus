import entryObject from "../assets/Images/EntryPage/EntryObject.png";

function Entry() {
  return (
    <div className="h-[35rem] bg-[#9BB5C8] w-full pt-20 lg:pt-[0.7rem]">
      <div className="h-[30rem] flex flex-col lg:flex-row">
        <div className=" w-[100%] h-[20rem] flex justify-center">
          <div className="w-[100%]  mt-3 flex justify-center ">
            <div className="w-[85%] px-4   relative   md:px-16 ">
              <div className="bg-transparent absolute w-40 h-40 rounded-[500px] shadow-2xl sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"></div>
              <div className="bg-transparent absolute shadow-2xl rounded-[500px] w-[4rem] h-[4rem]  left-[30%] bottom-[4rem] sm:bottom-[1rem] smmd:left-[20%] md:bottom-[-2rem] md:left-[27%] lg:bottom-[-6rem] lg:w-[5rem] lg:h-[5rem]"></div>
              <div className=" bg-transparent w-[6rem] h-[6rem] shadow-2xl rounded-[500px] bottom-[30%]  absolute right-[10%] xssm:right-[18%] smmd:bottom-[25%] smmd:right-[25%] smmd:w-[6rem] smmd:h-[6rem] md:w-[8rem] md:h-[8rem] lg:right-[15%] lgxl:right-[20%] lg:bottom-[-4rem]"></div>
              <div className=" grid h-[140%] items-center w-[80%] text-white  font-normal tracking-wider">
                {/* <p className="text-[80px] leading-tight max-h-32">WE DESIGN THE FUTURE</p>
                <p >At Nexus, we specialize in creating websites, management systems, and software solutions tailored to meet the unique needs of your business. Our team of expert developers is dedicated to delivering innovative and efficient solutions that drive your success.</p> */}
              </div>
            </div>
          
          </div>
        </div>
        <div className=" w-[40%]">
            2
        </div>
      </div>


      <div className="h-[5rem] w-full relative bg-white rounded-t-[100px] px-[]">
        <div className=" bg-red h-[6rem] w-[6rem]  absolute right-[18%] top-[-10rem] ">
          {/* <img src={entryObject} alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default Entry;
