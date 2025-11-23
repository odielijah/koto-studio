import { useState, useEffect } from "react";
import { workData, categories } from "../data/workData";
import ProjectItem from "../components/work/ProjectItem";
import WorkFilter from "../components/work/WorkFilter";
import WorkArchive from "../components/work/WorkArchive";
import "../assets/styles/work.css";

export default function Work() {
  const [filter, setFilter] = useState("Featured");
  const [renderedItems, setRenderedItems] = useState(workData);
  const [visibleItems, setVisibleItems] = useState(workData);

  useEffect(() => {
    const filtered =
      filter === "Featured"
        ? workData
        : workData.filter((item) => item.category === filter);

    setVisibleItems([]); // fade out old items

    const timeout = setTimeout(() => {
      setRenderedItems(filtered);
      requestAnimationFrame(() => setVisibleItems(filtered));
    }, 300);

    return () => clearTimeout(timeout);
  }, [filter]);

  return (
    <section className="work bg-black text-white py-20 max-md:py-0 min-h-screen">
      <div className="container">
        <WorkFilter
          categories={categories}
          filter={filter}
          setFilter={setFilter}
          visibleCount={renderedItems.length}
        />
      </div>

      <div className="container">
        <div className="work-projects-container grid gap-4">
          {renderedItems.map((item, i) => (
            <ProjectItem
              key={item.id}
              item={item}
              index={i}
              visible={visibleItems.includes(item)}
              style={{ transitionDelay: `${i * 80}ms` }}
            />
          ))}
        </div>
      </div>

      <WorkArchive />
    </section>
  );
}
