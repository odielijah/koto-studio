import FeedPost from "../components/home/FeedPost.jsx";
import HeroSection from "../components/home/HeroSection.jsx";
import Slider from "../components/home/Slider.jsx";

export default function Home() {
  return (
    <>
      <div className="bg-black">
        <HeroSection />
        <Slider />
      </div>
      <FeedPost />
    </>
  );
}
