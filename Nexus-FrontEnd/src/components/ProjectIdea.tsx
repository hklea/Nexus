import PaperPlane from "../assets/Icons/EntryPage/PaperPlane.png";

function ProjectIdea() {
  return (
    <div className="bg-[#181818] w-[90%] sm:w-[80%] md:w-[70%] h-[280px] lg:h-[210px] rounded-[50px] p-[17px] lg:py-[40px] py-[30px] lg:px-[50px] lg:flex lg:align-middle xl:pl-[80px]">
      <div className=" h-full text-left flex flex-col lg:flex-row">
        <div className="flex justify-center mt-[20px]">
          <img
            src={PaperPlane}
            alt=""
            className="w-[70px] h-[70px] mt-[10px]"
          />

          <div className="text-[13px] ml-[20px] text-white">
            <div className="text-white text-[19px] xs:text-[24px] md:text-[27px] font-bold mb-[5px] md:tracking-wider lg:tracking-normal lg:whitespace-nowrap">
              Have any project Idea?
            </div>
            <div className="text-[#E6E6E6] text-[12] md:text-[14px] w-[90%]">
              <p>Amet minim mollit non deserunt </p>
              <p>ullamco est sit aliqua dolor do amet sint</p>
            </div>
            <div className="w-[180px]   lg:hidden   py-6 ">
              <button className="text-white h-[45px] font-semibold text-[17px] rounded-[29px] flex align-middle justify-center py-2 bg-[#9BB5C8] w-full hover:bg-[#325f80] active:bg-[#9BB5C8]">
                Contact Now
              </button>
            </div>
          </div>
        </div>
        <div className="hidden  lg:flex w-full align-middle justify-end md:justify-end md:ml-[130px] py-[20px]">
          <div></div>
          <div className="w-[180px] ml-[40px] xs:ml-[20px] md:justify-end flex align-middle py-6 ">
            <button className="text-white h-[45px] font-semibold text-[17px] rounded-[29px] flex align-middle justify-center py-2 bg-[#9BB5C8] w-full hover:bg-[#325f80] active:bg-[#9BB5C8]">
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  // <div className="flex flex-col md:flex-row w-full justify-between">
  //         <div className="">
  //           <div className="flex flex-row">
  //             <div>
  //               <img src={PaperPlane} alt="" />
  //             </div>
  //             <div className="ml-[25px] text-gray-400 text-left">
  //               <div className="text-white text-[24px] font-bold mb-[5px] tracking-widest">
  //                 Have any project Idea?
  //               </div>
  //               <div className="text-[13px]">
  //                 <p>Amet minim mollit non deserunt </p>
  //                 <p>ullamco est sit aliqua dolor do amet sint</p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="text-white  w-[277px]">
  //           <div className="w-full h-full flex align-middle py-6 ">
  //             <button className="h-[45px] font-semibold text-[17px] rounded-[29px] flex align-middle justify-center py-2 bg-[#9BB5C8] w-full">
  //               Contact Now
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  /* <span className="text-left mr-[-25px]">
            <div className="text-white text-[25px] font-bold">
              Have any project Idea?
            </div>
            <div className="text-gray-400">
              <p>Amet minim mollit non deserunt </p>
              <p>ullamco est sit aliqua dolor do amet sint</p>
            </div>
          </span> */
}

export default ProjectIdea;
