import planetLogo from "../../assets/images/for-the-planet.svg";
import "../../assets/styles/footer.css";

const footerLinks = [
  { name: "Twitter", url: "#" },
  { name: "Instagram", url: "#" },
  { name: "LinkedIn", url: "#" },
  { name: "Off Newsletter", url: "#" },
  { name: "Off Live", url: "#" },
  { name: "Seasoned", url: "#" },
];

const footerLegalLinks = [
  { name: "Manage Cookies", url: "#" },
  { name: "Privacy Policy", url: "#" },
  { name: "Terms of Use", url: "#" },
];

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="text-white h-[9px]"
    >
      <path
        fill="currentColor"
        d="M24 20.414v1.103h-2.207V3.587L1.38 24 0 22.345 20.138 2.207H2.207V0H24v20.414Z"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <ul className="social-links text-white flex gap">
          {footerLinks.map((link, index) => {
            return (
              <li key={index}>
                <a href={link.url} className="hoverable">
                  <i>
                    <ArrowIcon />
                  </i>
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="footer-bottom">
          <p className="footer-legal">
            © 2025 Koto Studio Ltd, a private limited company incorporated in
            England and Wales under company number 9297454, registered at 1st
            Floor, 127-131, Great Suffolk St, London SE1 1PP
          </p>
          <div className="footer-info text-white flex">
            <ul className="legal-links">
              {footerLegalLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <a href={link.url} className="hoverable">{link.name}</a>
                  </li>
                );
              })}
            </ul>
            <img src={planetLogo} alt="1% for the planet" className="logo-planet" />
          </div>
        </div>
      </div>
    </footer>
  );
}
