import { useEffect, useState } from "react";
import "../assets/styles/cursor.css";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [state, setState] = useState({
    hover: false,
    type: "",
    title: "",
    subtitle: "",
  });
  const [showCursor, setShowCursor] = useState(false);

  // Detect if device has a fine pointer (mouse)
  useEffect(() => {
    const mql = window.matchMedia("(pointer: fine)");
    setShowCursor(mql.matches);

    const handleChange = (e) => setShowCursor(e.matches);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!showCursor) return;

    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target;

      // PROJECT ITEM DETECTION
      const project = target.closest(".project-item");
      if (project) {
        setState({
          hover: true,
          type: "project",
          title: project.getAttribute("data-title"),
          subtitle: project.getAttribute("data-subtitle"),
        });
        return;
      }

      // OTHER CURSOR TYPES
      let type = "";
      if (target.closest(".cursor-view")) type = "view";
      else if (target.closest(".cursor-read")) type = "read";
      else if (target.closest(".cursor-arrow-left")) type = "arrow-left";
      else if (target.closest(".cursor-arrow-right")) type = "arrow-right";

      const isHover = Boolean(target.closest(".hoverable"));
      setState({
        hover: isHover,
        type,
        title: "",
        subtitle: "",
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [showCursor]);

  if (!showCursor) return null; // don't render cursor on touch devices

  return (
    <div
      className={`custom-cursor 
        ${state.hover ? "cursor-hover" : ""}
        ${state.type ? "cursor-" + state.type : ""}
        ${state.type === "project" ? "cursor-project" : ""}
      `}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {/* Standard cursor types */}
      {state.type === "view" && <span className="cursor-text">view</span>}
      {state.type === "read" && <span className="cursor-text">read</span>}
      {state.type === "arrow-left" && <span className="cursor-text">←</span>}
      {state.type === "arrow-right" && <span className="cursor-text">→</span>}

      {/* Project tooltip */}
      {state.type === "project" && (
        <div className="cursor-project-wrapper">
          <span className="cursor-tooltip">
            {state.title}: {state.subtitle}
          </span>
        </div>
      )}
    </div>
  );
}
