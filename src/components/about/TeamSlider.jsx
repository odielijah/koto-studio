import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

export default function TeamSlider({ slides, swiperRef, setActiveIndex }) {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      slidesPerView={1}
      loop
      autoplay={{ delay: 3000 }}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      onBeforeInit={(swiper) => (swiperRef.current = swiper)}
      className="max-w-[404px] w-full"
    >
      {slides.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="h-[460px] bg-white/50">
            {item.slideImage ? (
              <img src={item.slideImage} className="w-full h-full" />
            ) : (
              <div className="w-full h-full bg-black/30" />
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
