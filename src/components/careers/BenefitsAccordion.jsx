export default function BenefitsAccordion({
  benefits,
  openAccordion,
  setOpenAccordion,
}) {
  return (
    <div className="accordion-container mt-[20px]">
      {benefits.map((item, i) => (
        <div
          key={i}
          className="border-t-[1px] border-[rgba(255,255,255,0.2)] text-white max-w-[600px]"
        >
          <div
            className="flex items-center cursor-pointer py-[20px]"
            onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
          >
            <span className="text-[12px] w-[30px] space-mono opacity-[0.5]">
              {item.number}
            </span>
            <span className="text-[20px] max-md:text-[16px] gt-lt">
              {item.title}
            </span>
            <span
              className={`toggle-icon ml-auto text-[18px] transition-all duration-300 ${
                openAccordion === i ? "rotate-45" : "rotate-0"
              }`}
            >
              +
            </span>
          </div>
          <div
            className={`accordion-content overflow-hidden transition-all duration-300 ${
              openAccordion === i ? "max-h-[200px]" : "max-h-0"
            }`}
          >
            <p className="gt-lt text-16px max-md:text-[14px] leading-[24px] mb-[1em] pl-[30px] opacity-[0.5]">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
