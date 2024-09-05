import PaperPlane from "../assets/Icons/EntryPage/PaperPlane.png";
import { subscribe } from "../api/ContactApi";
import { useEffect, useState } from "react";
import { User } from "../types/User";
import { userAtom } from "../types/Atoms";
import { useAtom } from "jotai";

function ProjectIdea() {
  const [sub, setSub] = useState<Boolean>(false);
  const [isReady] = useAtom(userAtom);

  useEffect(() => {
    const isSubscribe = async () => {
      if (isReady) {
        const userString = sessionStorage.getItem("user");
        const user: User = userString ? JSON.parse(userString) : null;
        if (user.subscribe) {
          setSub(user.subscribe);
        }
      }
    };
    isSubscribe();
  }, [isReady]);

  const handleSubscribe = async () => {
    const userString = sessionStorage.getItem("user");
    const user: User = userString ? JSON.parse(userString) : null;
    await subscribe(user._id);
    setSub((prevSub) => !prevSub);
  };

  return (
    <div className="bg-[#181818] w-[90%] sm:w-[80%] md:w-[70%] h-[280px] lg:h-[210px] rounded-[50px] p-[17px] lg:py-[40px] py-[30px] lg:px-[50px] lg:flex lg:align-middle xl:pl-[80px]">
      <div className=" h-full text-left flex flex-col lg:flex-row lg:w-[93%]">
        <div className="flex justify-center mt-[20px]">
          <img
            src={PaperPlane}
            alt=""
            className="w-[70px] h-[70px] mt-[10px]"
          />

          <div className="text-[13px] ml-[20px] text-white">
            <div className="text-white text-[19px] xs:text-[24px] md:text-[27px] font-bold mb-[5px] md:tracking-wider lg:tracking-normal xl:tracking-widest lg:whitespace-nowrap">
              Have any project Idea?
            </div>
            <div className="text-[#E6E6E6] text-[12] md:text-[14px] w-[90%]">
              <p>Subcribe now and be notified for</p>
              <p>all inovation that we create</p>
            </div>
            <div className="w-[180px]   lg:hidden   py-6 ">
              {sub === false ? (
                <button
                  onClick={() => {
                    handleSubscribe();
                  }}
                  className="text-white h-[45px] font-semibold text-[17px] rounded-[29px] flex align-middle justify-center py-2 bg-[#9BB5C8] w-full hover:bg-[#325f80] active:bg-[#9BB5C8]"
                >
                  Subcribe
                </button>
              ) : (
                <button
                  onClick={() => {
                    handleSubscribe();
                  }}
                  className="text-white h-[45px] font-semibold text-[17px] rounded-[29px] flex align-middle justify-center py-2 bg-[#9BB5C8] w-full hover:bg-[#325f80] active:bg-[#9BB5C8]"
                >
                  Subcribed
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="hidden  lg:flex w-full align-middle justify-end md:justify-end md:ml-[130px] py-[20px]">
          <div></div>
          <div className="w-[180px] ml-[40px] xs:ml-[20px] md:justify-end flex align-middle py-6 ">
            {sub == false ? (
              <button
                onClick={() => {
                  handleSubscribe();
                }}
                className="text-white h-[45px] font-semibold text-[17px] rounded-[29px] flex align-middle justify-center py-2 bg-[#9BB5C8] w-full hover:bg-[#325f80] active:bg-[#9BB5C8]"
              >
                Subcribe
              </button>
            ) : (
              <button
                onClick={() => {
                  handleSubscribe();
                }}
                className="text-white h-[45px] font-semibold text-[17px] rounded-[29px] flex align-middle justify-center py-2 bg-[#9BB5C8] w-full hover:bg-[#325f80] active:bg-[#9BB5C8]"
              >
                Subcribed
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectIdea;
