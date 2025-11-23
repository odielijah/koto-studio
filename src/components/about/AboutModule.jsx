import SkillsSlider from "./SkillsSlider.jsx";
import PartnersFilter from "./PartnersFilter.jsx";
import TeamSection from "./TeamSection.jsx";

export default function AboutModule({ module }) {
  return (
    <div className="module-about text-white py-[80px] max-md:pt-[20px]">
      <div className="container">
        {module.hr && <hr className="mb-[40px] opacity-[0.3]" />}

        <h2 className="flex gap-2 space-mono uppercase text-[12px] mb-[23px]">
          <span className="opacity-[0.5]">{module.number}</span>
          <span>{module.title}</span>
        </h2>

        <div
          className={`tracking-[-.02em] max-w-[886px] gt-th ${
            module.largeText
              ? "text-[62px] max-md:text-[36px] leading-[1.1]"
              : "text-[36px] leading-[1]"
          }`}
        >
          {module.heading}
        </div>
      </div>

      {/* Skills Section */}
      {module.number === "2.0" && <SkillsSlider skills={module.skills} />}

      {/* Collaborators */}
      {module.number === "3.0" && (
        <PartnersFilter filters={module.filters} partners={module.partners} />
      )}

      {/* Team */}
      {module.number === "4.0" && (
        <TeamSection teamSlides={module.teamSlides} />
      )}
    </div>
  );
}
