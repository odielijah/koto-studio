import { useState, useEffect } from "react";
import { workData, categories } from "../data/workData";
import ProjectItem from "../components/work/ProjectItem";
import WorkFilter from "../components/work/WorkFilter";
import WorkArchive from "../components/work/WorkArchive";
import "../assets/styles/work.css";

export default function Work() {
  const [filter, setFilter] = useState("Featured");
  const [visibleItems, setVisibleItems] = useState(workData);

  useEffect(() => {
    const filtered = filter === "Featured"
      ? workData
      : workData.filter((item) => item.category === filter);

    setVisibleItems([]);
    const timeout = setTimeout(() => setVisibleItems(filtered), 100);

    return () => clearTimeout(timeout);
  }, [filter]);

  return (
    <section className="work bg-black text-white py-20 max-md:py-0 min-h-screen">
      <div className="container">
        <WorkFilter 
          categories={categories} 
          filter={filter} 
          setFilter={setFilter} 
          visibleCount={visibleItems.length} 
        />
      </div>

      <div className="container">
        <div
          className="work-projects-container work-v2 active grid gap-4"
          data-filterslug={filter.toLowerCase()}
          data-count={visibleItems.length}
          id={`${filter.toLowerCase()}Posts`}
        >
          {visibleItems.map((item, i) => (
            <ProjectItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>

      <WorkArchive />
    </section>
  );
}
