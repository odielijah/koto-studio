import { Link } from "react-router-dom";
import kotoLogo from "../../assets/images/koto-logo.png";
import "../../assets/styles/header.css";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-99 w-full">
      <div className="nav-panel">
        <div className="container flex items-center justify-between">
          <div className="nav-panel-logo">
            <Link to="/">
              <img src={kotoLogo} alt="Koto Logo" className="w-[61px] h-[30px]" />
            </Link>
          </div>

          <div className="menu-nav md:hidden text-white uppercase font-mono font-light">
            Menu
          </div>

          <ul className="nav-panel-links hidden md:flex text-white items-center gap-10 uppercase font-mono font-light text-sm">
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
