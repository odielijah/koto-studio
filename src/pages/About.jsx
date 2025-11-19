import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Activision from "../assets/images/Activision.svg";
import AirBnB from "../assets/images/AirBnB.svg";
import Amazon from "../assets/images/Amazon.svg";
import CocaCola from "../assets/images/CocaCola.svg";
import Google from "../assets/images/Google.svg";
import Meta from "../assets/images/Meta.svg";
import Spotify from "../assets/images/Spotify.svg";
import Uber from "../assets/images/Uber.svg";

import newNatural from "../assets/images/Meatable.png";
import screwNew from "../assets/images/screw-new.png";

export default function About() {
  // Simple list of collaborators we can filter on.
  const partnerLogos = [
    { name: "Activision", category: "Gaming", image: Activision },
    { name: "AirBnB", category: "Travel", image: AirBnB },
    { name: "Amazon", category: "Fashion", image: Amazon },
    { name: "Coca-cola", category: "CPG", image: CocaCola },
    { name: "Google", category: "Fintech", image: Google },
    { name: "Meta", category: "Social", image: Meta },
    { name: "Spotify", category: "Entertainment", image: Spotify },
    { name: "Uber", category: "Travel", image: Uber },
  ];

  const [activeFilter, setActiveFilter] = useState("Partners");
  const [activeIndex, setActiveIndex] = useState(0);
  const teamSwiperRef = useRef(null);
  const teamRowHeight = 68;


  const filteredPartners =
    activeFilter === "Partners"
      ? partnerLogos
      : partnerLogos.filter((partner) => partner.category === activeFilter);

  const aboutModules = [
    {
      number: "1.0",
      title: "Who are we?",
      heading: `We’re optimists building brand and digital for the most impactful
            companies of today and the founders defining tomorrow.`,
      hr: false,
      largeText: true,
    },
    {
      number: "2.0",
      title: "How?",
      heading: `We work how you work: adapting our process to meet yours—with co-creation non-negotiable.`,
      skills: [
        {
          heading: `Strategy`,
          description: `We author or evolve brand strategy that differentiates and dictates meaningful visual and verbal identities.`,
          slides: [
            {
              slideImage: screwNew,
              slideTitle: "Brand Idea",
            },
            {
              slideImage: "",
              slideTitle: "Strategic Framework",
            },
            {
              slideImage: "",
              slideTitle: "Brand Architecture",
            },
          ],
        },
        {
          heading: `Creative`,
          description: `We uncover insights and align on a visual and verbal vision to build idea-driven world-class brands.`,
          slides: [
            {
              slideImage: "",
              slideTitle: "Brand Identity",
            },
            {
              slideImage: "",
              slideTitle: "Naming",
            },
            {
              slideImage: "",
              slideTitle: "Illustration",
            },
            {
              slideImage: "",
              slideTitle: "Art direction",
            },
            {
              slideImage: "",
              slideTitle: "Typography",
            },
          ],
        },
        {
          heading: `Execution`,
          description: `We author or evolve brand strategy that differentiates and dictates meaningful visual and verbal identities.`,
          slides: [
            {
              slideImage: "",
              slideTitle: "Photography",
            },
            {
              slideImage: "",
              slideTitle: "Campaign",
            },
            {
              slideImage: "",
              slideTitle: "Website",
            },
            {
              slideImage: "",
              slideTitle: "Guidelines",
            },
          ],
        },
      ],
      hr: true,
    },
    {
      number: "3.0",
      title: "Collaborators",
      heading: `We partner with businesses of any size or sector: from first round of funding to every subsequent stage of growth.`,
      filters: [
        "Partners",
        "Beauty",
        "Biotech",
        "CPG",
        "Crypto",
        "EDTech",
        "Entertainment",
        "Fashion",
        "Fintech",
        "Future of Food",
        "Gaming",
        "Healthcare",
        "Marketplaces",
        "Saas",
        "Social",
        "Travel",
        "Venture Capital",
      ],
      hr: true,
    },
    {
      number: "4.0",
      title: "Team",
      heading: `We are a group of curious optimists building world-class brands.`,
      teamSlides: [
        {
          slideImage: "",
          name: "Fred North",
          role: "Creative Director",
        },
        {
          slideImage: "",
          name: "Harrison Dew",
          role: "Designer Director",
        },
        {
          slideImage: "",
          name: "Ingrid Tagel",
          role: "Assistant Management Accountant",
        },
        {
          slideImage: "",
          name: "Jake Khan",
          role: "Strategist",
        },
        {
          slideImage: "",
          name: "Joe Ling",
          role: "Creative Director",
        },
        {
          slideImage: "",
          name: "Joshua Osborne",
          role: "Art Director",
        },
        {
          slideImage: "",
          name: "Katey Harvey",
          role: "Managing Director",
        },
        {
          slideImage: "",
          name: "Kyle Toukatley",
          role: "Senior Designer",
        },
        {
          slideImage: "",
          name: "Lily Dent",
          role: "Designer",
        },
        {
          slideImage: "",
          name: "Marius Trinkunas",
          role: "Designer",
        },
        {
          slideImage: "",
          name: "Phoebe Roberts",
          role: "Client Executive",
        },
      ],
      hr: true,
    },
  ];
  const getOpacity = (index) => {
    const diff = Math.abs(activeIndex - index);

    if (diff === 0) return "opacity-100"; // center
    if (diff === 1) return "opacity-60";
    if (diff === 2) return "opacity-30";
    if (diff === 3) return "opacity-10";
    return "opacity-5";
  };

  return (
    <>
      {aboutModules.map((module, i) => (
        <div
          className="module-about text-white py-[80px] max-md:pt-[20px]"
          key={i}
        >
          <div className="container">
            {module.hr === true && (
              <hr className="mb-[40px] relative opacity-[0.3]" />
            )}
            <h2 className="flex gap-2 flex-wrap space-mono uppercase text-[12px] leading-[1.3] mb-[23px]">
              <span className="opacity-[0.5]">{module.number}</span>
              <span>{module.title}</span>
            </h2>
            <div
              className={`tracking-[-.02em] max-w-[886px] gt-th ${
                module.largeText
                  ? "text-[62px] max-md:text-[36px] max-w-[1076px] leading-[1.1] tracking-[-.04em]"
                  : "text-[36px] leading-[1]"
              }`}
            >
              {module.heading}
            </div>
          </div>

          {module.number === "2.0" && (
            <div>
              {module.skills?.map((skill, i) => (
                <div
                  className="pt-[80px] pb-[54px]"
                  key={`${skill.heading}-${i}`}
                >
                  <div className="container">
                    {/* Heading + Description */}
                    <div className="gt-th text-[20px] max-w-[551px] leading-[1.3] tracking-[-.01em] ">
                      <h2 className="text-[28px] tracking-[-.02em] leading-[1] mb-[0.5em]">
                        {skill.heading}
                      </h2>
                      <p>{skill.description}</p>
                    </div>

                    {/* 🔥 PLACE THE BIG SLIDER HERE */}
                    <div className="module-slider mt-10 max-md:mt-6">
                      <Swiper
                        spaceBetween={12}
                        slidesPerView={2} // default for desktop
                        breakpoints={{
                          600: {
                            slidesPerView: 2, // md and above
                          },
                          0: {
                            slidesPerView: 1, // max-md
                          },
                        }}
                        centeredSlides={false}
                        grabCursor={true}
                        className="slider-about !overflow-visible"
                      >
                        {skill.slides.map((slide, index) => (
                          <SwiperSlide
                            key={index}
                            data-caption={slide.slideTitle}
                          >
                            <div className="module-slider-img flex flex-col gap-2">
                              {/* Image */}
                              {slide.slideImage ? (
                                <div className="w-full h-[404px] max-md:h-[260px] bg-white/10 flex items-center justify-center">
                                  <img
                                    src={slide.slideImage}
                                    alt={slide.slideTitle}
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                              ) : (
                                <div className="w-full h-[404px] max-md:h-[260px] bg-white/10 flex items-center justify-center"></div>
                              )}

                              {/* Slide title BELOW the image */}
                              <div className="text-left text-white text-[18px] gt-th mt-2">
                                {slide.slideTitle}
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>

                      <div className="slider-about-caption"></div>
                      <div className="slider-button-wrapper"></div>
                    </div>

                    {/* END SLIDER */}
                  </div>
                </div>
              ))}
            </div>
          )}

          {module.number === "3.0" && (
            <div className="container">
              <div className="logos-filter space-mono uppercase text-[11px]">
                <ul className="flex flex-wrap gap-[4px] mt-[24px]">
                  {module.filters.map((filter) => {
                    const isActive = activeFilter === filter;
                    return (
                      <li key={filter} className="mb-[.5em]">
                        <button
                          type="button"
                          onClick={() => setActiveFilter(filter)}
                          className={`border border-white uppercase rounded-[9999px] py-[5px] px-[16px] transition-all duration-200 ${
                            isActive
                              ? "bg-white text-black"
                              : "hover:bg-white hover:text-black"
                          }`}
                        >
                          {filter}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="mt-8 pt-[54px] pb-[102px] flex justify-center">
                <div className="grid max-md:grid-cols-2 grid-cols-4 justify-center items-center gap-[25px] max-w-[1130px]">
                  {filteredPartners.map((partner) => (
                    <div
                      key={`${partner.name}-${partner.category}`}
                      className="w-full max-w-[240px] max-md:max-w-[160px] mx-auto"
                    >
                      {partner.image ? (
                        <img
                          src={partner.image}
                          alt={partner.name}
                          className="w-full h-auto object-contain"
                        />
                      ) : (
                        <div className="w-full h-48 bg-gray-200 rounded-xl mb-2 flex items-center justify-center">
                          <span className="text-gray-500">No image</span>
                        </div>
                      )}
                    </div>
                  ))}
                  {filteredPartners.length === 0 && (
                    <p className="text-[20px] opacity-70 leading-[1] text-center w-full gt-th">
                      We haven’t partnered in this category yet. Check back
                      soon.
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
          {module.number === "4.0" && module.teamSlides?.length > 0 && (
            <div className="pt-[80px]">
              <div className="container">
                <div className="flex flex-col gap-[40px] lg:flex-row items-center justify-center max-w-full mx-auto lg:px-0">
                  <div className="max-w-[404px] max-md:max-w-[250px] none">
                    <Swiper
                      modules={[Autoplay, EffectFade]}
                      slidesPerView={1}
                      loop={true}
                      autoplay={{ delay: 3000, disableOnInteraction: false }}
                      onSlideChange={(swiper) =>
                        setActiveIndex(swiper.realIndex)
                      }
                      onBeforeInit={(swiper) => {
                        teamSwiperRef.current = swiper;
                      }}
                      className="overflow-hidden"
                    >
                      {module.teamSlides.map((slide, slideIndex) => (
                        <SwiperSlide key={`${slide.name}-${slideIndex}`}>
                          <div className="bg-white/50 flex items-center justify-center h-[460px] max-md:h-[320px] w-full max-w-[404px] max-md:max-w-[90%] mx-auto  overflow-hidden">
                            {slide.slideImage ? (
                              <img
                                src={slide.slideImage}
                                alt={slide.name}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-black/30 block" />
                            )}
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="max-w-[404px] w-full px-2 space-mono max-md:text-center">
                    <div
                      className="overflow-hidden"
                      style={{
                        height:
                          window.innerWidth <= 768
                            ? `${teamRowHeight * 5}px` // show 5 on mobile
                            : `${teamRowHeight * 9}px`, // desktop stays same
                      }}
                    >
                      <div
                        className="flex flex-col transition-transform duration-500"
                        style={{
                          transform:
                            window.innerWidth <= 768
                              ? `translateY(-${activeIndex * teamRowHeight}px)` // active stays at top
                              : `translateY(-${
                                  (activeIndex - 3) * teamRowHeight
                                }px)`, // desktop behavior
                        }}
                      >
                        {module.teamSlides.map((member, memberIndex) => {
                          const isActive = memberIndex === activeIndex;
                          return (
                            <button
                              key={`${member.name}-${memberIndex}`}
                              type="button"
                              onClick={() => {
                                setActiveIndex(memberIndex);
                                teamSwiperRef.current?.slideToLoop(memberIndex);
                              }}
                              className={`text-left py-4 transition-all ${getOpacity(
                                memberIndex
                              )}`}
                              style={{ height: `${teamRowHeight}px` }}
                            >
                              <span className="gt-th text-[36px] max-md:text-[24px] leading-none">
                                {member.name}
                              </span>
                              <span className="block uppercase text-[12px] max-md:text-[10px] mt-[2px] leading-[1.3]">
                                {member.role}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
