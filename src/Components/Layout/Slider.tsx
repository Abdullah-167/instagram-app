import { useState } from 'react';
import Image from 'next/image';
import Draggable from 'react-draggable';

const Slider = ({ slidesToShow }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      imageUrl: '/padhana.jpg',
      caption: 'Slide 1',
    },
    {
      id: 2,
      imageUrl: '/padhana.jpg',
      caption: 'Slide 2',
    },
    {
      id: 3,
      imageUrl: '/padhana.jpg',
      caption: 'Slide 3',
    },
    {
      id: 4,
      imageUrl: '/padhana.jpg',
      caption: 'Slide 4',
    },
    // Add more slides as needed
  ];

  const totalSlides = slides.length;
  const totalPages = Math.ceil(totalSlides / slidesToShow);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - slidesToShow ? 0 : prevSlide + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - slidesToShow : prevSlide - 1
    );
  };

  const handleDragStop = (e, data) => {
    const threshold = 100; // Minimum distance required to trigger slide change

    if (data.deltaX > threshold) {
      goToPrevSlide();
    } else if (data.deltaX < -threshold) {
      goToNextSlide();
    }
  };

  return (
    <div className="relative">
      <Draggable axis="x" onStop={handleDragStop}>
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full px-2 max-w-[1000px]">
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <Image src={slide.imageUrl} alt={slide.caption} width={800} height={500} />
                <div className="p-4">
                  <p className="text-lg font-bold">{slide.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Draggable>

      {totalPages > 1 && (
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`mx-1 w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-gray-800' : 'bg-gray-400'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      )}

      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
        onClick={goToPrevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
        onClick={goToNextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Slider;
