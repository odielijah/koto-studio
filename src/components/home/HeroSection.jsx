import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../../assets/styles/hero.css";
import HeroImages from "./HeroImages.jsx";

export default function HeroSection({ nextSectionRef }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 767);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const [activePack, setActivePack] = useState({
    category: null,
    segment: null,
  });
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const getDimmed = (category) =>
    hoveredCategory && hoveredCategory !== category ? "dimmed" : "";

  // Reset both hoveredCategory and activePack
  const handleLeave = () => {
    if (!isMobile) {
      setHoveredCategory(null);
      setActivePack({ category: null, segment: null });
    }
    // On mobile, keep hoveredCategory active when activePack is set
  };

  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ArrowIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffe800"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M12 19V5M5 12l7 7 7-7" />
    </svg>
  );

  const CloseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffe800"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <section className="bg-black text-white h-[100vh] mt-[-80px] flex items-center justify-center pb-[3%] max-md:pb-[0] flex-col relative">
        <HeroImages activePack={activePack} />

        <div className="container text-left">
          <p className="gt-th text-[52px] max-md:text-[38px] max-[350px]:!text-[32px] max-md:leading-[1.2] font-[300] max-w-[1200px] !z-[10] tracking-[-.64px] leading-[1.1]">
            <span className={hoveredCategory ? "dimmed" : ""}>
              Optimists building{" "}
            </span>
            <span
              className={`underline-animate hoverable desktop-anchor ${getDimmed(
                "brand"
              )}`}
              onMouseEnter={() => !isMobile && setHoveredCategory("brand")}
              onMouseLeave={() => !isMobile && handleLeave()}
              onClick={() => {
                if (isMobile) {
                  setHoveredCategory("brand");
                  setActivePack({ category: "brand", segment: "all" });
                }
              }}
            >
              brand
              <span className="triggers">
                <span
                  className="trigger"
                  onMouseEnter={() =>
                    setActivePack({ category: "brand", segment: "0" })
                  }
                />
                <span
                  className="trigger"
                  onMouseEnter={() =>
                    setActivePack({ category: "brand", segment: "1" })
                  }
                />
                <span
                  className="trigger"
                  onMouseEnter={() =>
                    setActivePack({ category: "brand", segment: "2" })
                  }
                />
              </span>
            </span>{" "}
            <span className={hoveredCategory ? "dimmed" : ""}>and </span>
            <span
              className={`underline-animate hoverable desktop-anchor ${getDimmed(
                "digital"
              )}`}
              onMouseEnter={() => !isMobile && setHoveredCategory("digital")}
              onMouseLeave={() => !isMobile && handleLeave()}
              onClick={() => {
                if (isMobile) {
                  setHoveredCategory("digital");
                  setActivePack({ category: "digital", segment: "all" });
                }
              }}
            >
              digital
              <span className="triggers">
                <span
                  className="trigger"
                  onMouseEnter={() =>
                    setActivePack({ category: "digital", segment: "0" })
                  }
                />
                <span
                  className="trigger"
                  onMouseEnter={() =>
                    setActivePack({ category: "digital", segment: "1" })
                  }
                />
              </span>
            </span>{" "}
            <span className={hoveredCategory ? "dimmed" : ""}>
              for the most impactful{" "}
            </span>
            <span
              className={`underline-animate hoverable desktop-anchor ${getDimmed(
                "companies"
              )}`}
              onMouseEnter={() => !isMobile && setHoveredCategory("companies")}
              onMouseLeave={() => !isMobile && handleLeave()}
              onClick={() => {
                if (isMobile) {
                  setHoveredCategory("companies");
                  setActivePack({ category: "companies", segment: "all" });
                }
              }}
            >
              companies
              <span className="triggers">
                <span
                  className="trigger"
                  onMouseEnter={() =>
                    setActivePack({ category: "companies", segment: "0" })
                  }
                />
                <span
                  className="trigger"
                  onMouseEnter={() =>
                    setActivePack({ category: "companies", segment: "1" })
                  }
                />
                <span
                  className="trigger"
                  onMouseEnter={() =>
                    setActivePack({ category: "companies", segment: "2" })
                  }
                />
              </span>
            </span>{" "}
            <span className={hoveredCategory ? "dimmed" : ""}>
              of today and the{" "}
            </span>
            <span
              className={`underline-animate hoverable desktop-anchor ${getDimmed(
                "founders"
              )}`}
              onMouseEnter={() => !isMobile && setHoveredCategory("founders")}
              onMouseLeave={() => !isMobile && handleLeave()}
              onClick={() => {
                if (isMobile) {
                  setHoveredCategory("founders");
                  setActivePack({ category: "founders", segment: "all" });
                }
              }}
            >
              founders
              <span className="triggers">
                <span
                  className="trigger"
                  onMouseEnter={() =>
                    setActivePack({ category: "founders", segment: "0" })
                  }
                />
                <span
                  className="trigger"
                  onMouseEnter={() =>
                    setActivePack({ category: "founders", segment: "1" })
                  }
                />
                <span
                  className="trigger"
                  onMouseEnter={() =>
                    setActivePack({ category: "founders", segment: "2" })
                  }
                />
              </span>
            </span>{" "}
            <span className={hoveredCategory ? "dimmed" : ""}>
              defining tomorrow.
            </span>
          </p>

          {/* Scroll button */}
          <div
            className="absolute bottom-20 max-md:bottom-6 cursor-pointer"
            onClick={() => {
              // Desktop: always scroll
              if (!isMobile) {
                scrollToNextSection();
                return;
              }

              // Mobile: if images are open -> close them
              if (activePack.category) {
                setActivePack({ category: null, segment: null });
                setHoveredCategory(null); // Add this line
                return;
              }

              // Mobile: images closed -> scroll as usual
              scrollToNextSection();
            }}
          >
            <div className="hero-navigation">
              {/* DESKTOP: always arrow */}
              {!isMobile ? (
                <ArrowIcon />
              ) : /* MOBILE: toggle based on activePack */
              activePack.category ? (
                <CloseIcon />
              ) : (
                <ArrowIcon />
              )}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
