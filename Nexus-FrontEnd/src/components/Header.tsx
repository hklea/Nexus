import { useState, useEffect } from "react";
import More from "./Common/More";
import {
  InstaIcon,
  messageIcon,
  TikTikIcon,
} from "../data/EntryPage/HeaderData";

function Header() {
  const [scrolledFromTop, setScrolledFromTop] = useState(false);
  const [isSelected, setIsSelected] = useState(0);
  const [moreSize, setMoreSize] = useState("medium");

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 300) {
        setScrolledFromTop(true);
      } else {
        setScrolledFromTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        className={`fixed top-0 left-0 right-0 z-50 w-full flex justify-between items-center px-1 md:px-12 transition-all duration-1000 ${
          scrolledFromTop
            ? "h-16 bg-[#9BB5C8] drop-shadow-3xl"
            : "bg-[#9BB5C8] h-20"
        }`}
      >
        <a href="#" className="w-[30%] lg:w-[10%] ml-[10px]">
          <img
            src="https://res.cloudinary.com/thirus/image/upload/v1631988912/logos/chitchat-logo_pkpwwu.png"
            alt="ChitChat Logo"
            className={`h-8 transform origin-left transition duration-200 ${
              scrolledFromTop ? "scale-75" : "scale-100"
            }`}
          />
        </a>



        <nav className=" bg-[#181818] hidden lg:block mr-[20px] text-[#dddada] rounded-[50px] text-nowrap">
          <ul className="flex justify-between align-middle  px-6 font-thin py-[5px] text-[13px] ">
            <li
              className={`mr-16 ${
                isSelected === 0 ? "underline" : ""
              }  cursor-pointer hover:underline mt-[3px]`}
              onClick={() => {
                setIsSelected(0);
              }}
            >
              HOME
            </li>
            <li
              className={`mr-16 ${
                isSelected === 1 ? "underline" : ""
              } cursor-pointer hover:underline mt-[3px]`}
              onClick={() => {
                setIsSelected(1);
              }}
            >
              ABOUT
            </li>
            <li
              className={`mr-16 ${
                isSelected === 2 ? "underline" : ""
              } cursor-pointer hover:underline mt-[3px]`}
              onClick={() => {
                setIsSelected(2);
              }}
            >
              SERVICE
            </li>
            <li
              className={`mr-16 ${
                isSelected === 3 ? "underline" : ""
              } cursor-pointer hover:underline mt-[3px]`}
              onClick={() => {
                setIsSelected(3);
              }}
            >
              PORTOFOLIO
            </li>
            <ul className="flex cursor-pointer">
              <li
                className={`cursor-pointer ${
                  isSelected === 4 ? "underline" : ""
                } hover:underline mt-[3px] mr-[10px]`}
                onClick={() => {
                  setIsSelected(4);
                }}
              >
                CONTACT US
              </li>
              <div className="h-[25px] rounded-[50px]  w-[25px] mr-[-15px] bg-white grid items-center justify-center drop-shadow-2xl">
                {messageIcon}
              </div>
            </ul>
          </ul>
        </nav>

        <div
          className={`${
            moreSize == "large" ? "w-[140px]" : "w-[100px]"
          }  h-[40px] flex items-center justify-between    `}
        >
          <div className="flex  w-[0%]  justify-between">
            <div className=" drop-shadow-2xl">
              <div
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
          <div className="flex lg:hidden text-right cursor-pointer justify-end">
            <More size={moreSize} />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
