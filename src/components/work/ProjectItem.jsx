export default function ProjectItem({ item, index }) {
  const gridClass = `grid-space-${(index % 4) + 1}`;

  return (
    <a
      href={item.link}
      data-orientation={item.orientation}
      className={`project-item ${gridClass} group relative overflow-hidden bg-gray-700`}
    >
      <video
        src={item.video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 transition-all duration-500"></div>
    </a>
  );
}
