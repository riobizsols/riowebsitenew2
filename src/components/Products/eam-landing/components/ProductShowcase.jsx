import { ASSETS } from "../assets";

export default function ProductShowcase({ inline = false }) {
  const Root = inline ? "div" : "section";

  return (
    <Root
      className={`v2-showcase${inline ? " v2-showcase--inline" : ""}`}
      aria-label="Product screenshots"
    >
      <div className={inline ? "v2-showcase-inner" : "v2-container v2-showcase-inner"}>
        <div className="v2-showcase-laptop">
          <img
            src={ASSETS.dashboardDesktop}
            alt="RIO CMMS dashboard with work orders, preventive maintenance KPIs, and charts"
            className="v2-showcase-desktop-img"
            loading="lazy"
          />
        </div>
        <div className="v2-showcase-phone" aria-hidden="true">
          <div className="v2-phone-mock v2-showcase-phone-frame">
            <div className="v2-phone-screen">
              <img
                src={ASSETS.dashboardMobile}
                alt=""
                className="v2-hero-mobile-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
