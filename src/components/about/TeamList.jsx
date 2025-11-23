export default function TeamList({ slides, activeIndex, swiperRef }) {
  const rowHeight = 68;

  return (
    <div className="max-w-[404px] w-full px-2 space-mono">
      <div className="overflow-hidden" style={{ height: `${rowHeight * 9}px` }}>
        <div
          className="flex flex-col transition-transform duration-500"
          style={{
            transform: `translateY(-${(activeIndex - 3) * rowHeight}px)`,
          }}
        >
          {slides.map((member, idx) => (
            <button
              key={idx}
              onClick={() => {
                swiperRef.current?.slideToLoop(idx);
              }}
              className="py-4 text-left"
              style={{ height: `${rowHeight}px` }}
            >
              <span className="gt-th text-[36px]">{member.name}</span>
              <span className="block uppercase text-[12px]">{member.role}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
