import { useRef } from "react";
import HeroSection from "../components/home/HeroSection.jsx";
import Slider from "../components/home/Slider.jsx";
import FeedPost from "../components/home/FeedPost.jsx";

export default function Home() {
  const nextSectionRef = useRef(null);

  return (
    <>
      <HeroSection nextSectionRef={nextSectionRef} />
      <div ref={nextSectionRef}>
        <Slider />
      </div>
      <FeedPost />
    </>
  );
}
