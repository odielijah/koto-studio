import { useState } from "react";

export default function PartnersFilter({ filters, partners }) {
  const [active, setActive] = useState("Partners");

  const filtered =
    active === "Partners"
      ? partners
      : partners.filter((p) => p.category === active);

  return (
    <div className="container">
      <div className="logos-filter text-[11px] space-mono">
        <ul className="flex flex-wrap gap-[4px] mt-[24px]">
          {filters.map((filter) => (
            <li key={filter}>
              <button
                onClick={() => setActive(filter)}
                className={`border py-[5px] px-[16px] rounded-[9999px] ${
                  active === filter
                    ? "bg-white text-black"
                    : "hover:bg-white hover:text-black"
                }`}
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Logos grid */}
      <div className="mt-8 pt-[54px] pb-[102px] flex justify-center">
        <div className="grid grid-cols-4 max-md:grid-cols-2 gap-[25px] max-w-[1130px]">
          {filtered.map((partner) => (
            <img
              key={partner.name}
              src={partner.image}
              className="w-full max-w-[240px] mx-auto"
            />
          ))}

          {filtered.length === 0 && (
            <p className="text-[20px] opacity-70 text-center w-full gt-th">
              No partners here yet. Check back soon.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
