import { Swiper, SwiperSlide } from "swiper/react";

export default function SkillsSlider({ skills }) {
  return (
    <div>
      {skills.map((skill, i) => (
        <div key={i} className="pt-[80px] pb-[54px]">
          <div className="container">
            <div className="gt-th text-[20px] max-w-[551px]">
              <h2 className="text-[28px] mb-[0.5em]">{skill.heading}</h2>
              <p>{skill.description}</p>
            </div>

            <div className="module-slider mt-10">
              <Swiper
                spaceBetween={12}
                slidesPerView={2}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  600: { slidesPerView: 2 },
                }}
                className="slider-about !overflow-visible"
              >
                {skill.slides.map((slide, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="module-slider-img flex flex-col gap-2">
                      {slide.slideImage ? (
                        <img
                          src={slide.slideImage}
                          className="w-full h-[404px] object-cover"
                        />
                      ) : (
                        <div className="w-full h-[404px] bg-white/10"></div>
                      )}
                      <div className="text-[18px] gt-th">
                        {slide.slideTitle}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
