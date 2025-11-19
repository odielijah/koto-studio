export default function JobList({ jobs }) {
  return (
    <div className="flex flex-col divide-y divide-white/10 max-w-[600px]">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="py-[18px] flex items-start justify-between gap-4"
        >
          <div>
            <p className="gt-lt text-white text-[20px] leading-[1.2] mb-[4px]">
              {job.title}
            </p>
            <p className="space-mono text-[11px] uppercase text-white/60">
              {job.department} ·{" "}
              {job.location.charAt(0).toUpperCase() + job.location.slice(1)} ·{" "}
              {job.type}
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
              <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
