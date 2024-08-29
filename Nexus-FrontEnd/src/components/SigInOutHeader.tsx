import { useState, useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';
import {
  InstaIcon,
  TikTikIcon,
} from "../data/EntryPage/HeaderData";
import { openInstagramPage, openTikTokPage } from "../utilities/EntryPage/CallingSocial";
import { useNavigate } from "react-router-dom";

function SigInOutHeader() {
    const [scrolledFromTop, ] = useState(false);
    const [moreSize, setMoreSize] = useState("medium");
    const navigate = useNavigate();
  
    
  

  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 575) {
          setMoreSize("large");
        } else {
          setMoreSize("medium");
        }
      };
  
      handleResize(); // Set initial size
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
  
    return (
      <>
        <header
          className={` flex fixed lg:static  z-50 w-full  justify-between items-center px-1 md:px-12 transition-all duration-1000 ${
            scrolledFromTop
              ? "h-16 bg-[#9BB5C8] drop-shadow-3xl"
              : "bg-[#9BB5C8] h-20"
          }`}
        >
          <a href="#" className="w-[30%] lg:w-[10%] ml-[10px]">
            {/*The nexus Logo will be here */}
            <img
              src="https://res.cloudinary.com/thirus/image/upload/v1631988912/logos/chitchat-logo_pkpwwu.png"
              alt="ChitChat Logo"
              className={`h-8 transform origin-left transition duration-200 ${
                scrolledFromTop ? "scale-75" : "scale-100"
              }`}
            />
          </a>
  
       <div onClick={()=>{navigate("/")}} className=" md:text-[15px] text-[12px] flex cursor-pointer  text-white rounded-[50px] md:pl-5 md:pr-6 pl-3 pr-4 py-1  md:py-1 md:pb-2 bg-[#181818] hover:bg-black active:bg-[#000000]">
        <div > <HomeIcon fontSize="small"></HomeIcon></div>
       <p className="ml-2 mt-[0.11rem]"> Home</p>
       </div>
  
          <div
            className={`${
              moreSize == "large" ? "w-[140px]" : "w-[100px]"
            }  h-[40px] flex  md:justify-center   mr-[-1rem] md:mr-3 `}
          >
            <div className="flex  w-[0%]  text-center items-center justify-between">
              <div className=" drop-shadow-2xl">
                <div
                  onClick={() => {
                    openInstagramPage();
                  }}
                  className={`${
                    moreSize == "large"
                      ? "h-[30px] w-[30px] "
                      : "h-[23px] w-[23px] "
                  } rounded-[50px]  bg-white hover:bg-stone-300 active:bg-white cursor-pointer  flex items-center align-middle justify-center`}
                >
                  {" "}
                  <InstaIcon
                    width={moreSize == "large" ? 15 : 13}
                    height={moreSize == "large" ? 15 : 13}
                  />
                </div>
              </div>
              <div>
                {" "}
                <div
                  onClick={() => {
                    openTikTokPage();
                  }}
                  className={`${
                    moreSize == "large"
                      ? "h-[30px] w-[30px] "
                      : "h-[23px] w-[23px] "
                  } ml-2  rounded-[50px] cursor-pointer  bg-white hover:bg-stone-300 active:bg-white flex items-center align-middle justify-center`}
                >
                  {" "}
                  <TikTikIcon
                    width={moreSize == "large" ? 15 : 13}
                    height={moreSize == "large" ? 15 : 13}
                  />
                </div>
              </div>
            </div>
        
          </div>
        </header>
      </>
    );
}

export default SigInOutHeader