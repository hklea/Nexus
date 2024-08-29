import image from "../assets/Images/EntryPage/ManInChair.webp";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import Transition from "./Common/Transition";
import TransitionImage from "./Common/TransitionImage";
import { useEffect, useState } from "react";
import { status } from "../api/SigninsignupApi";
import WavingHandOutlinedIcon from "@mui/icons-material/WavingHandOutlined";
import { userAtom } from "../types/Atoms";
import { useAtom } from "jotai";

function Entry() {
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [,setIsReady] = useAtom(userAtom);

  useEffect(() => {
    const sigin = async () => {
      const data = await status();
      console.log(data);
  
      if (data.message === "User is not authenticated") {
        sessionStorage.removeItem("user");
        setIsReady(false);
      } else {
        setIsReady(true);
        sessionStorage.setItem("user", JSON.stringify(data.user));
        if (data.user.username) {
          setName(data.user.username);
        } else {
          setName(data.user.displayName);
        }
      }
    };
  
    sigin();
  }, []);
  

  return (
    <div className="lg:h-[35rem]  bg-[#9BB5C8] w-full pt-20 sm:pt-[6rem] lg:pt-[0.7rem] pb-12 sm:pb-20 md:pt-[7rem] lg:pb-0">
      <div className=" flex flex-row lg:flex-row pt-[25px]">
        <div className="w-[50%] lg:w-[60%] h-[20rem] flex justify-center">
          <div className="w-[100%]  mt-1 flex justify-center  ">
            <div className="w-[90%] px-2  relative   md:pl-16 ">
              <div className="bg-transparent absolute z-0 w-40 h-40 rounded-[500px] shadow-2xl sm:w-48 sm:h-48  md:w-56 md:h-56 lg:w-64 lg:h-64"></div>
              <div className="bg-transparent absolute shadow-2xl rounded-[500px] w-[4rem] h-[4rem] z-0 left-[30%] bottom-[4rem] sm:bottom-[1rem] smmd:left-[20%] md:bottom-[-2rem] md:left-[27%] lg:bottom-[-6rem] lg:w-[5rem] lg:h-[5rem] "></div>
              <div className=" bg-transparent w-[6rem] h-[6rem] shadow-2xl rounded-[500px] bottom-[30%] z-0  absolute right-[-15%] xssm:right-[18%] smmd:bottom-[25%] smmd:right-[25%] smmd:w-[6rem] smmd:h-[6rem] md:w-[8rem] md:h-[8rem] md:right-[-20%] lg:right-[15%] lgxl:right-[20%] lg:bottom-[-4rem]"></div>
              <Transition>
                <div className="  h-full  items-end flex mt-[-1rem]  sm:mt-0 md:mt-[-2rem] lg:mt-8 lg:ml-[3rem] ">
                  <div className="h-[88%]  w-full text-[22px]  mdlg:ml-[-50px] mdlg:w-[120%] lg:w-[85%] lg:text-[45px] xl:text-[55px]  font-michroma ">
                    <div className="lg:hidden text-[22px]  text-white  max-h-32 w-[100%]  flex flex-col justify-start sm:text-[28px] md:text-[33px] mdlg:text-[36px]">
                      <p className="whitespace-nowrap ml-4 ">WE DESIGN </p>
                      <p> </p>
                      <p className="whitespace-nowrap ml-5 mt-1 ">THE FUTURE</p>
                    </div>

                    <div className="hidden lg:block">
                      <p className=" text-white pl-2 whitespace-nowrap  justify-start  leading-tight max-h-32  lg:flex">
                        WE DESIGN
                      </p>
                      <p className=" text-white pl-4 whitespace-nowrap flex justify-start  leading-tight max-h-32 mt-3  lg:flex xl:pl-6">
                        THE FUTURE
                      </p>
                    </div>

                    <div className="mt-[1rem] pl-5 w-[120%]   sm:text-justify px-6  mdlg:hidden">
                      <p className="font-kumbh-sans text-[12px]  bg-black bg-opacity-[0.5%]  rounded-[50%] text-white sm:text-[13px]">
                        At ChiefSoft, we create custom websites, systems, and
                        software to meet your business's needs. Our expert team
                        delivers innovative solutions for your success.
                      </p>
                    </div>

                    <div className="mt-[1rem] z-40 pl-5 w-[120%] lg:mt-6 text-justify  px-6 hidden mdlg:flex">
                      <p className="font-kumbh-sans text-[14px]  lgxl:text-[15px] bg-black bg-opacity-[0.5%]  rounded-[50%] text-white">
                        At ChiefSoft, we specialize in creating websites, management
                        systems, and software solutions tailored to meet the
                        unique needs of your business. Our team of expert
                        developers is dedicated to delivering innovative and
                        efficient solutions that drive your success.
                      </p>
                    </div>
                    <div className=" ml-2 lg:ml-4 z-40   lg:flex mt-7 lg:mt-10">
                      {name != null ? (
                        <div className="text-gray-900 whitespace-nowrap sm:text-[12px] sm:ml-2 lg:text-[13px] lgxl:text-[15px]  relative z-40 py-[6px] sm:pr-8 pr-5  bg-[#F7BE38] hover:bg-[#F7BE38]/90  focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-[12px] text-[9px] px-4 lg:px-10 lg:py-2.5 text-center  items-center dark:focus:ring-[#F7BE38]/50 lg:me-2 lg:mb-2 inline-flex">
                          <p> Welcome {name}</p>
                          <div className="ml-4 lg:hidden">
                            <WavingHandOutlinedIcon  fontSize="small"/>
                          </div>
                          <div className="ml-4 hidden lg:block">
                            <WavingHandOutlinedIcon  fontSize="medium"/>
                          </div>
                        </div>
                      ) : (
                        <button
                          onClick={() => {
                            navigate("/signin");
                          }}
                          type="button"
                          className="text-gray-900 relative z-40 py-[6px] pr-8 cursor-pointer bg-[#F7BE38] hover:bg-[#F7BE38]/90  focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-[12px] text-sm px-4 lg:px-10 lg:py-2.5 text-center  items-center dark:focus:ring-[#F7BE38]/50 lg:me-2 lg:mb-2 inline-flex"
                        >
                          <div className="">
                            <NotificationsActiveIcon />
                          </div>
                          <div className=" cursor-pointer ml-[5px] lg:ml-[15px] font-kumbh-lato tracking-widest text-[10px] lg:text-[17px] flex flex-row ">
                            {" "}
                            Sign In
                            <div className="h-[10px] w-[10px] ml-1">
                              <ArrowForwardIcon />
                            </div>
                          </div>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>

        <div className=" w-[50%]  lg:block relative ">
          <TransitionImage>
            <img
              src={image}
              alt=""
              className="absolute bottom-[3rem] h-[15rem]  sm:h-[18rem] sm:bottom-[1.5rem] sm:ml-1 md:h-[21rem] mdlg:h-[23rem] md:ml-8 mdlg:bottom-[-1rem]  lg:relative  lg:h-[27rem]  lg:ml-[0%] xl:h-[32.65rem]"
            />
          </TransitionImage>
        </div>
      </div>
    </div>
  );
}

export default Entry;
