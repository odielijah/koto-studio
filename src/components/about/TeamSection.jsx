import { useRef, useState } from "react";
import TeamSlider from "./TeamSlider.jsx";
import TeamList from "./TeamList.jsx";

export default function TeamSection({ teamSlides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className="pt-[80px]">
      <div className="container flex flex-col lg:flex-row gap-[40px] items-center justify-center">
        <TeamSlider
          slides={teamSlides}
          swiperRef={swiperRef}
          setActiveIndex={setActiveIndex}
        />

        <TeamList
          slides={teamSlides}
          activeIndex={activeIndex}
          swiperRef={swiperRef}
        />
      </div>
    </div>
  );
}
