import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { jobOpenings } from "../data/jobOpenings.js";
import { careerSections } from "../data/careerSections.js";
import { benefitsData } from "../data/baseBenefits.js";

const openingLocations = Array.from(
  new Set(jobOpenings.map((job) => job.location))
);
const openingDepartments = Array.from(
  new Set(jobOpenings.map((job) => job.department))
);

export default function Careers() {
  // Filters for current openings
  const [openingsFilter, setOpeningsFilter] = useState("all");
  const [openingsLocation, setOpeningsLocation] = useState("all");
  const [openingsDepartment, setOpeningsDepartment] = useState("all");
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Filter for benefits section
  const [benefitsFilter, setBenefitsFilter] = useState("london");
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleDropdownSelect = (type, value) => {
    if (type === "location") {
      setOpeningsLocation(value);
    }

    if (type === "department") {
      setOpeningsDepartment(value);
    }

    setOpeningsFilter(type);
    setActiveDropdown(null);
  };

  const formatOptionLabel = (value) =>
    value
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const filteredJobs = jobOpenings.filter((job) => {
    if (openingsFilter === "all") return true;

    if (openingsFilter === "location") {
      if (openingsLocation === "all") return true;
      return job.location === openingsLocation;
    }

    if (openingsFilter === "department") {
      if (openingsDepartment === "all") return true;
      return job.department === openingsDepartment;
    }

    return true;
  });

  return (
    <>
      <section className="careers-section section-one" id="join-us">
        <div className="container pt-20 max-md:pt-0">
          <h1 className="text-white gt-th text-[clamp(36px,26px+2.4436vw,62px)] tracking-[-.04em] max-md:leading-[1.2] leading-[1.1] max-w-[1077px] mt-[60px]">
            We’re rational optimists making the work of our lives together.
            Sound like your thing? Join our team.
          </h1>
          <button
            className="inline-flex text-white space-mono uppercase text-[12px] items-center gap-[1em] border-[1px] p-[20px] rounded-[9999em] transition-all duration-500 cursor-pointer hover:bg-white hover:text-black mt-[60px]"
            onClick={() =>
              document
                .getElementById("current-openings")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M13.0001 16.1716L18.3641 10.8076L19.7783 12.2218L12.0001 20L4.22192 12.2218L5.63614 10.8076L11.0001 16.1716V4H13.0001V16.1716Z"></path>
            </svg>
            <span>Open Positions</span>
          </button>
          <div className="mt-[60px] relative w-full max-w-[1360px] aspect-video mx-auto">
            <iframe
              src="https://player.vimeo.com/video/984233488?h=c64fe458fc&title=0&muted=1&autopause=0&loop=1&background=1&quality=720p&app_id=122963"
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: "none" }}
              allow="autoplay 'self'; fullscreen 'self';"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {careerSections.map((section, i) => (
        <section
          key={i}
          className={`careers-section ${section.type}`}
          id={section.id}
        >
          <div className="container">
            {/* Divider */}
            <span className="block mt-[80px] pt-[80px] border-t-[1px] border-[rgba(255,255,255,0.2)]"></span>

            {/* Subtitle & Column Text */}
            {section.id === "open-to-all" ? (
              <div className="flex flex-col pb-[60px] flex-wrap gap-[20px] md:flex-row md:items-start md:gap-[30rem]">
                {section.subtitle && (
                  <h4 className="text-white space-mono uppercase text-[12px] leading-[1.2] pb-[25px]">
                    <span className="text-[rgba(255,255,255,0.5)]">
                      {String(i + 1).padStart(2, "0")}:{" "}
                    </span>
                    {careerSections[i].subtitle}
                  </h4>
                )}

                {section.columnText && (
                  <p className="text-white space-mono uppercase text-[12px] leading-[15.6px] max-w-[545px] mt-[0px]">
                    {section.columnText}
                  </p>
                )}
              </div>
            ) : (
              <>
                {section.subtitle && (
                  <h4 className="text-white block space-mono uppercase text-[12px] leading-[1.2] pb-[25px]">
                    <span className="text-[rgba(255,255,255,0.5)]">
                      {String(i + 1).padStart(2, "0")}:{" "}
                    </span>
                    {careerSections[i].subtitle}
                  </h4>
                )}

                {section.columnText && (
                  <p className="text-white space-mono uppercase text-[12px] leading-[15.6px] max-w-[800px] mt-[30px]">
                    {section.columnText}
                  </p>
                )}
              </>
            )}

            {/* Title */}
            {section.title && (
              <h2 className="text-white gt-th text-[clamp(25px,18px+1.8vw,36px)] max-md:leading-[1.2] tracking-[-.02em] leading-[1.1] max-w-[800px] w-full mb-[18px]">
                {section.title}
              </h2>
            )}

            {/* Swiper for Locations */}
            {section.id === "locations" && (
              <Swiper
                spaceBetween={20}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
                grabCursor={true}
                className="mt-[60px] !overflow-visible"
              >
                {section.locationSlides.map((loc, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="rounded-2xl overflow-visible">
                      <img
                        src={loc.locationImage}
                        alt={loc.locationTitle}
                        className="w-[670px] object-cover"
                      />
                    </div>

                    <p className="text-white gt-lt my-4 text-[28px]">
                      {loc.locationTitle}
                    </p>
                    <a
                      href="#"
                      className="flex text-white items-center relative z-[999] gap-[4px] space-mono uppercase text-[12px]"
                    >
                      Open Location in Maps
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                      </svg>
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}

            {/* Filters */}
            {section.filters.length > 0 && (
              <div className="flex gap-[4px] pb-[24px] flex-wrap">
                {section.filters.map((filter) => {
                  const isCurrentOpenings = section.id === "current-openings";
                  const isDropdown = isCurrentOpenings && filter !== "all";
                  const isActive =
                    (isCurrentOpenings && openingsFilter === filter) ||
                    (section.id === "benefits" && benefitsFilter === filter);

                  const baseClasses = `
          px-[16px] py-[5px] border space-mono cursor-pointer uppercase text-[11px] rounded-[9999em] transition-all duration-300
          ${
            isActive
              ? "bg-white text-black border-white"
              : "text-white border-white/20 hover:bg-white hover:text-black"
          }`;

                  if (!isDropdown) {
                    return (
                      <button
                        key={filter}
                        onClick={() => {
                          if (section.id === "current-openings") {
                            setOpeningsFilter(filter);
                            // reset dropdown filters when switching back to all
                            if (filter === "all") {
                              setOpeningsLocation("all");
                              setOpeningsDepartment("all");
                            }
                            setActiveDropdown(null);
                          }
                          if (section.id === "benefits") {
                            setBenefitsFilter(filter);
                            setOpenAccordion(null); // close accordions on tab change
                          }
                        }}
                        className={baseClasses}
                      >
                        {filter}
                      </button>
                    );
                  }

                  const dropdownOptions =
                    filter === "location"
                      ? [...openingLocations]
                      : [...openingDepartments];

                  return (
                    <div className="relative" key={filter}>
                      <button
                        onClick={() => {
                          setOpeningsFilter(filter);
                          setActiveDropdown((prev) =>
                            prev === filter ? null : filter
                          );
                        }}
                        className={`${baseClasses} flex items-center gap-[6px]`}
                      >
                        {filter}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className={`w-4 h-4 transition-transform duration-300 ${
                            activeDropdown === filter
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                          fill="currentColor"
                        >
                          <path d="M12 15.5 5.5 9l1.4-1.4L12 12.7l5.1-5.1L18.5 9z"></path>
                        </svg>
                      </button>

                      {activeDropdown === filter && (
                        <div className="absolute top-full left-0 mt-[8px] w-[200px] rounded-[16px] border border-white/20 bg-black/90 backdrop-blur-sm p-[8px] flex flex-col z-[999]">
                          {dropdownOptions.map((option) => {
                            const isSelected =
                              (filter === "location" &&
                                openingsLocation === option) ||
                              (filter === "department" &&
                                openingsDepartment === option);

                            return (
                              <button
                                key={option}
                                onClick={() =>
                                  handleDropdownSelect(filter, option)
                                }
                                className={`text-left px-[12px] py-[8px] rounded-[10px] space-mono text-[11px] text-white transition-all duration-200 ${
                                  isSelected
                                    ? "text-black"
                                    : "hover:bg-white hover:text-black"
                                }`}
                              >
                                {formatOptionLabel(option)}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Current openings content */}
            {section.id === "current-openings" && (
              <div className="mt-[24px] max-w-[600px]">
                {/* Job list */}
                <div className="flex flex-col divide-y divide-white/10">
                  {filteredJobs.map((job) => (
                    <div
                      key={job.id}
                      className="py-[18px] flex items-start justify-between gap-4 "
                    >
                      <div>
                        <p className="gt-lt text-white text-[20px] leading-[1.2] mb-[4px]">
                          {job.title}
                        </p>
                        <p className="space-mono text-[11px] uppercase text-white/60">
                          {job.department} ·{" "}
                          {job.location.charAt(0).toUpperCase() +
                            job.location.slice(1)}{" "}
                          · {job.type}
                        </p>
                      </div>
                      <button className="space-mono flex gap-1 items-center text-[11px] uppercase border border-white/40 text-white px-[14px] py-[6px] rounded-[9999em] cursor-pointer hover:bg-white hover:text-black transition-all duration-300">
                        Apply
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-3.5 h-3.5"
                        >
                          <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits Accordions */}
            {section.id === "benefits" && (
              <div className="accordion-container mt-[20px]">
                {benefitsData[benefitsFilter]?.map((item, index) => (
                  <div
                    className="border-t-[1px] border-[rgba(255,255,255,0.2)] text-white max-w-[600px]"
                    key={index}
                  >
                    <div
                      className="flex items-center cursor-pointer py-[20px]"
                      onClick={() =>
                        setOpenAccordion(openAccordion === index ? null : index)
                      }
                    >
                      <span className="text-[12px] w-[30px] space-mono opacity-[0.5]">
                        {item.number}
                      </span>
                      <span className="text-[20px] max-md:text-[16px] gt-lt">
                        {item.title}
                      </span>
                      <span
                        className={`toggle-icon ml-auto text-[18px] transition-all transition-[cubic-bezier(0.37, 0.01, 0, 0.98)] duration-300 ${
                          openAccordion === index ? "rotate-45" : "rotate-0"
                        }`}
                      >
                        +
                      </span>
                    </div>

                    <div
                      className={`accordion-content overflow-hidden transition-all duration-300 transition-[cubic-bezier(0.37, 0.01, 0, 0.98)] ${
                        openAccordion === index ? "max-h-[200px]" : "max-h-0"
                      }`}
                    >
                      <p className="gt-lt text-16px max-md:text-[14px] leading-[24px] mb-[1em] pl-[30px] opacity-[0.5]">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
