import { ASSETS, SITE } from "../assets";
import WhatsAppButton from "./WhatsAppButton";

const NAV = [
  { label: "Features", href: "#features" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#demo-form" },
  { label: "Resources", href: "https://riobizsols.com/blog" },
  { label: "About Us", href: "https://riobizsols.com/about" },
];

export default function Header() {
  return (
    <header className="v2-topbar">
      <div className="v2-container v2-topbar-inner">
        <a href={SITE.home} className="v2-logo-link" aria-label="RIO BizSols home">
          <img src={ASSETS.logo} alt="RIO BizSols" className="v2-logo" />
        </a>

        <nav className="v2-nav" aria-label="Main">
          {NAV.map(({ label, href }) => (
            <a key={label} href={href} className="v2-nav-link">
              {label}
            </a>
          ))}
        </nav>

        <div className="v2-topbar-cta">
          <WhatsAppButton className="v2-topbar-wa-text" source="header" />
        </div>
      </div>
    </header>
  );
}
