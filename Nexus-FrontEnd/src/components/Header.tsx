import { useState, useEffect } from "react";
import More from "./Common/More";
import { Link } from "react-scroll";
import {
  InstaIcon,
  messageIcon,
  TikTikIcon,
} from "../data/EntryPage/HeaderData";
import {
  openInstagramPage,
  openTikTokPage,
} from "../utilities/EntryPage/CallingSocial";
import logo from "../assets/Icons/logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { handleLogout } from "../api/SigninsignupApi";

function Header() {
  const [scrolledFromTop, setScrolledFromTop] = useState(false);
  const [isSelected, setIsSelected] = useState(0);
  const [moreSize, setMoreSize] = useState("medium");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setWindowWidth(currentWidth);
    };

    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setScrolledFromTop(true);
      } else {
        setScrolledFromTop(false);
      }
    };

    window.addEventListener("resize", handleResize);

    if (windowWidth < 992) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    // Initial check
    if (windowWidth < 992) {
      handleScroll(); // Check scroll position initially if width < 992
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [windowWidth]);

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
  }, [window.innerWidth]);

  useEffect(() => {
    const sections = ["home", "about", "services", "portfolio", "contact"];
    const sectionElements = sections.map((id) => document.getElementById(id));

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sections.indexOf(entry.target.id);
          setIsSelected(index);
        }
      });
    }, observerOptions);

    sectionElements.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionElements.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
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
          {/*The ChiefSoft Logo will be here */}
          <img
            src={logo}
            alt="ChitChat Logo"
            className={`h-32 lg:h-36 whitespace-nowrap lg:min-w-32 lg:mt-2 transform origin-left transition duration-200 ${
              scrolledFromTop ? "scale-75" : "scale-100"
            }`}
          />
        </a>

        <div className="bg-red-600 flex justify-center align-top h-[30px] z-50 ">
          {" "}
          <nav className=" bg-[#181818] hidden lg:flex lg:fixed lg:text-center lg:justify-center mr-[20px] text-[#dddada] rounded-[50px] text-nowrap">
            <ul className="flex justify-between align-middle  px-6 font-thin py-[5px] text-[13px] ">
              <li
                className={`mr-16 ${
                  isSelected === 0 ? "underline" : ""
                }  cursor-pointer hover:underline mt-[3px]`}
              >
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={300}
                  onClick={() => setIsSelected(0)}
                >
                  HOME
                </Link>
              </li>
              <li
                className={`mr-16 ${
                  isSelected === 1 ? "underline" : ""
                } cursor-pointer hover:underline mt-[3px]`}
              >
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={300}
                  onClick={() => setIsSelected(1)}
                >
                  ABOUT
                </Link>
              </li>
              <li
                className={`mr-16 ${
                  isSelected === 2 ? "underline" : ""
                } cursor-pointer hover:underline mt-[3px]`}
              >
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={300}
                  onClick={() => setIsSelected(2)}
                >
                  SERVICES
                </Link>
              </li>
              <li
                className={`mr-16 ${
                  isSelected === 3 ? "underline" : ""
                } cursor-pointer hover:underline mt-[3px]`}
              >
                <Link
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  duration={300}
                  onClick={() => setIsSelected(3)}
                >
                  PORTFOLIO
                </Link>
              </li>
              <ul className="flex cursor-pointer">
                <li
                  className={`cursor-pointer ${
                    isSelected === 4 ? "underline" : ""
                  } hover:underline mt-[3px] mr-[10px]`}
                >
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={300}
                    onClick={() => setIsSelected(4)}
                  >
                    CONTACT
                  </Link>
                </li>
                <div className="h-[25px] rounded-[50px]  w-[25px] mr-[-15px] bg-white grid items-center justify-center drop-shadow-2xl">
                  {messageIcon}
                </div>
              </ul>
            </ul>
          </nav>
        </div>

        <div
          className={`${
            moreSize == "large" ? "w-[140px]" : "w-[100px]"
          }  h-[40px] flex items-center justify-between    `}
        >
          <div className="flex  w-[0%] mr-32 lg:mr-0 justify-between">
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
            <div>
              {" "}
              <div
                onClick={() => {
                  handleLogout();

                 
                }}
                className={`${
                  moreSize == "large"
                    ? "h-[30px] w-[30px] "
                    : "h-[23px] w-[23px] "
                } ml-2  rounded-[50px] cursor-pointer  text-white flex items-center align-middle justify-center`}
              >
                {" "}
                <LogoutIcon />
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
