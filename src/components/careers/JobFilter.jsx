export default function JobFilter({
  sectionId,
  filters,
  openingsFilter,
  setOpeningsFilter,
  setOpeningsLocation,
  setOpeningsDepartment,
  activeDropdown,
  setActiveDropdown,
  openingLocations,
  openingDepartments,
}) {
  const handleDropdownSelect = (type, value) => {
    if (type === "location") setOpeningsLocation(value);
    if (type === "department") setOpeningsDepartment(value);
    setOpeningsFilter(type);
    setActiveDropdown(null);
  };

  const formatOptionLabel = (value) =>
    value
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(" ");

  return (
    <div className="flex gap-[4px] pb-[24px] flex-wrap hoverable">
      {filters.map((filter) => {
        const isDropdown = sectionId === "current-openings" && filter !== "all";
        const isActive =
          sectionId === "current-openings" && openingsFilter === filter;

        const baseClasses = `px-[16px] py-[5px] border space-mono cursor-pointer uppercase text-[11px] rounded-[9999em] transition-all duration-300
            ${
              isActive
                ? "bg-white text-black border-white"
                : "text-white border-white/20 hover:bg-white hover:text-black"
            }`;

        if (!isDropdown)
          return (
            <button
              key={filter}
              onClick={() => setOpeningsFilter(filter)}
              className={baseClasses}
            >
              {filter}
            </button>
          );

        const dropdownOptions =
          filter === "location" ? openingLocations : openingDepartments;
        return (
          <div className="relative" key={filter}>
            <button
              onClick={() =>
                setActiveDropdown((prev) => (prev === filter ? null : filter))
              }
              className={`${baseClasses} flex items-center gap-[6px]`}
            >
              {filter}
              <svg
                className={`w-4 h-4 transition-transform ${
                  activeDropdown === filter ? "rotate-180" : "rotate-0"
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 15.5 5.5 9l1.4-1.4L12 12.7l5.1-5.1L18.5 9z" />
              </svg>
            </button>

            {activeDropdown === filter && (
              <div className="absolute top-full left-0 mt-[8px] w-[150px] rounded-[16px] border border-white/20 bg-black/90 backdrop-blur-sm p-[8px] flex flex-col z-[999]">
                {dropdownOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleDropdownSelect(filter, option)}
                    className={`text-left px-[12px] py-[8px] rounded-[10px] space-mono text-[11px] text-white transition-all duration-200 hover:bg-white hover:text-black`}
                  >
                    {formatOptionLabel(option)}
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
