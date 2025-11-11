import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import About from "./pages/About.jsx";
import Careers from "./pages/Careers.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <>
      {/* Header is outside Routes - it stays on all pages */}
      <Header />

      <main id="main" className="bg-black">
        {/* Routes looks at the current URL and renders the matching Route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <div className="bg-black">
        {/* Footer is outside Routes - it stays on all pages */}
        <Footer />
      </div>
    </>
  );
}

export default App;
