import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../assets/styles/slider.css";
import polkadotVideo from "../../assets/videos/polkadot-video.mp4";
import amazonVideo from "../../assets/videos/amazon-video.mp4";
import microsoftVideo from "../../assets/videos/microsoft-video.mp4";
import tripadvisorVideo from "../../assets/videos/trip-advisor-video.mp4";
import lyftVideo from "../../assets/videos/lyft-video.mp4";
import freetradeVideo from "../../assets/videos/freetrade-video.mp4";
import fluzImage from "../../assets/images/fluz-image.jpeg";
import callOfDutyVideo from "../../assets/videos/call-of-duty-video.mp4";

const slides = [
  {
    type: "video",
    src: polkadotVideo,
    title: "Polkadot",
  },
  {
    type: "video",
    src: amazonVideo,
    title: "Amazon: Global Brand Transformation",
  },
  {
    type: "video",
    src: microsoftVideo,
    title: "Microsoft: 50th Anniversary",
  },
  {
    type: "video",
    src: tripadvisorVideo,
    title: "Tripadvisor: Every type of traveler, every type of trip",
  },
  {
    type: "video",
    src: lyftVideo,
    title: "Lyft: Your Lyft is Arriving",
  },
  {
    type: "video",
    src: freetradeVideo,
    title: "Freetrade",
  },
  {
    type: "image",
    src: fluzImage,
    title: "Fluz",
  },
  {
    type: "video",
    src: callOfDutyVideo,
    title: "Call of Duty®",
  },
];

function updateSlideStyles(swiper) {
  const slides = swiper.slides;

  slides.forEach((slide, index) => {
    const offset = Math.abs(swiper.activeIndex - index);

    let opacity;
    if (offset === 0) {
      opacity = 1; // center
    } else if (offset === 1) {
      opacity = 0.7; // next to center
    } else if (offset === 2) {
      opacity = 0; // second away
    } else {
      opacity = 0;
    }

    // no scale or translate animation (optional)
    const scale = 1;
    const translateY = 0;

    slide.style.setProperty("--slide-opacity", opacity);
    slide.style.setProperty("--slide-scale", scale);
    slide.style.setProperty("--slide-translateY", `${translateY}px`);
  });
}

export default function Slider() {
  return (
    <div className="koto-slider md:!py-[120px]">
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        centeredSlides={true}
        slidesPerView="auto"
        initialSlide={1}
        grabCursor={true}
        spaceBetween={-27}
        className="koto-swiper"
        onSlideChangeTransitionStart={updateSlideStyles}
        onAfterInit={(swiper) => updateSlideStyles(swiper)} // apply style on load
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="koto-slide">
            <a href={slide.link} target="_blank" rel="noopener noreferrer" className="slide-link">
              {slide.type === "video" ? (
                <video autoPlay loop muted playsInline className="slide-media">
                  <source src={slide.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="slide-media"
                />
              )}
              <div className="slide-title">{slide.title}</div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
