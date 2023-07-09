import Image from "next/image";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Stories = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 8,
      spacing: 5,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  });

  return (
    <div className=" pt-10 z-0">
      <div ref={sliderRef} className="keen-slider">
        <div className="flex justify-center gap-2 px-4">
          {storyData.map((item, index) => {
            return (
              <div
                className="cursor-pointer flex flex-col justify-center items-center keen-slider__slide"
                key={index}
              >
                <div className="border-2 border-black rounded-full p-0.5 mb-3">
                  <Image
                    src={item.img}
                    alt={""}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>

                <p className="text-[10px] text-center">
                  {item.title.length > 10
                    ? item.title.slice(0, 10) + "..."
                    : item.title}
                </p>
              </div>
            );
          })}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Stories;

const storyData = [
  {
    img: "/padhana.jpg",
    title: "Burak özçivit",
  },
  {
    img: "/padhana.jpg",
    title: "Chris Hamesworth",
  },
  {
    img: "/padhana.jpg",
    title: "Vikram",
  },
  {
    img: "/padhana.jpg",
    title: "Tom Cruise",
  },
  {
    img: "/padhana.jpg",
    title: "Abdullah Padhana",
  },
  {
    img: "/padhana.jpg",
    title: "Burak özçivit",
  },
  {
    img: "/padhana.jpg",
    title: "Jeemy",
  },
  {
    img: "/padhana.jpg",
    title: "F Pehlwaan",
  },
  {
    img: "/padhana.jpg",
    title: "Burak özçivit",
  },
  {
    img: "/padhana.jpg",
    title: "Jeemy",
  },
  {
    img: "/padhana.jpg",
    title: "F Pehlwaan",
  },
];


function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}