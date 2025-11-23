export default function ProjectItem({ item, index, visible }) {
  const gridClass = `grid-space-${(index % 4) + 1}`;
  const isVideo = item.video;
  const isImage = item.image;

  return (
    <a
      data-orientation={item.orientation}
      className={`project-item ${gridClass} group relative overflow-hidden bg-gray-700 fade-item ${
        visible ? "visible" : ""
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {isVideo && (
        <video
          src={item.video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}

      {isImage && (
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}
    </a>
  );
}
