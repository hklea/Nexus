import { useState, useEffect } from "react";
import "../style/Portfolio.css"; // Import your CSS file for styling if needed
import {
  portfolioItems,
  portofolioCarouselData,
} from "../data/EntryPage/PortofolioData";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NomralCarousel from "./Common/Carousel/NormalCarousel";

function Portfolio() {
  const [itemsPerPage, setItemsPerPage] = useState(1); // Default to 1 item per page
  const totalItems = portfolioItems.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCarousel, setIsCarousel] = useState(false);
  const [carouselImages, setCarouselImages] = useState<string[]>([]);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(4); // lg and xl screens
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(3); // md screens
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(2); // sm screens
      } else {
        setItemsPerPage(1); // default
      }
    };

    updateItemsPerPage(); // Set initial value
    window.addEventListener("resize", updateItemsPerPage); // Update on resize

    return () => {
      window.removeEventListener("resize", updateItemsPerPage); // Cleanup
    };
  }, []);

  const prevSlide = () => {
    const newIndex =
      currentIndex - 1 < 0
        ? Math.ceil(totalItems / itemsPerPage) - 1
        : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex =
      currentIndex + 1 >= Math.ceil(totalItems / itemsPerPage)
        ? 0
        : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const getPageItems = (index: any) => {
    const start = index * itemsPerPage;
    const end = start + itemsPerPage;
    return portfolioItems.slice(start, end);
  };

  const handleLearnMore = async (id: number) => {
    const data = portofolioCarouselData.find((item:any) => item.id === id);
    if (data) {
      setCarouselImages(data.images);
      setIsCarousel(true);
    } else {
      setCarouselImages([]);
    }
  };

  return (
    <div className="w-full z-0">
      {isCarousel && (
        <div>
          <NomralCarousel images={carouselImages} myFunction={setIsCarousel} />{" "}
          {/* Pass the images state */}
        </div>
      )}
      <div className="portfolio-container z-0">
        <div className="portfolio-label">PORTOFOLIO</div>
        <div className="portfolio-description">
          Some of our best work, transforming <br />
          ideas into reality.
        </div>
      </div>
      <div className="px-4 lg:px-0 mx-auto w-full">
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform ease-in-out h-[30rem] relative  duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from(
                { length: Math.ceil(totalItems / itemsPerPage) },
                (_, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 flex flex-row "
                    style={{ minWidth: `${100 / itemsPerPage}%` }}
                  >
                    {getPageItems(index).map((item:any, itemIndex:number) => (
                      <div
                        key={itemIndex}
                        className="flex-1 rounded-[10px] flex-shrink-0 transform transition-transform duration-300 hover:scale-[1.15] hover:shadow-lg"
                        style={{ flexBasis: `calc(100% / ${itemsPerPage})` }}
                      >
                        <div className="p-8 ">
                          <img
                            className="h-[200px] rounded-[15px] w-full shadow-lg shadow-black"
                            src={item.image}
                            alt=""
                          />
                          <div className="px-2 py-3 font-bold text-[18px] tracking-wide text-[#181818]">
                            {item.description}
                          </div>
                          <div className="px-2 pb-3 text-[#595566]">
                            {item.details}
                          </div>
                          <div className="px-2 py-3 absolute bottom-0 mb-6">
                            <button
                              onClick={() => {
                                handleLearnMore(item.id);
                              }}
                              className="px-6 bg-[#fafafa] text-black font-extra-bold text-[16px] hover:text-white hover:cursor-pointer hover:bg-[#181818]"
                            >
                              Learn More
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    {getPageItems(index).length < itemsPerPage &&
                      Array.from(
                        { length: itemsPerPage - getPageItems(index).length },
                        (_, i) => (
                          <div
                            key={`empty-${i}`}
                            className="flex-1 bg-gray-200 flex-shrink-0"
                            style={{
                              flexBasis: `calc(100% / ${itemsPerPage})`,
                            }}
                          ></div>
                        )
                      )}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex justify-between mt-4 px-2 sm:px-4 md:px-8 lg:px-12">
            <button
              onClick={prevSlide}
              className="text-gray-800 bg-white px-4 py-4 rounded-[50px] hover:bg-gray-900 hover:text-white"
            >
              <ArrowBackIcon />
            </button>
            <button
              onClick={nextSlide}
              className="text-gray-800 bg-white px-4 py-4 rounded-[50px] hover:bg-gray-900 hover:text-white"
            >
              <ArrowForwardIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
