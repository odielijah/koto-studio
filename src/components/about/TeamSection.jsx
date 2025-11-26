import { useState } from "react";
import TeamSlider from "./TeamSlider.jsx";
import TeamList from "./TeamList.jsx";
import "../../assets/styles/team-section.css";

export default function TeamSection({ teamSlides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container pt-[80px]">
      <div className="team flex max-[574px]:flex-col flex-row gap-[80px] flex-nowrap items-center justify-evenly">
        <TeamSlider slides={teamSlides} activeIndex={activeIndex} />
        <TeamList
          slides={teamSlides}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </div>
  );
}
