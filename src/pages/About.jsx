import AboutModule from "../components/about/AboutModule.jsx";
import modules from "../data/aboutModulesData.js";

export default function About() {
  return (
    <>
      {modules.map((module, idx) => (
        <AboutModule module={module} key={idx} />
      ))}
    </>
  );
}
