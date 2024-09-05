import  { useState } from "react";

const Component = () => {
  const images = [
    "https://via.placeholder.com/800x400?text=Image+1",
    "https://via.placeholder.com/800x400?text=Image+2",
    "https://via.placeholder.com/800x400?text=Image+3",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform ease-in-out duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto flex-shrink-0 rounded-lg"
              />
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={prevSlide}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Previous
          </button>
          <button
            onClick={nextSlide}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Component;
