import { ASSETS } from "../assets";

export default function ProductShowcase() {
  return (
    <div className="v2-showcase" aria-label="Product screenshots">
      <div className="v2-showcase-stage">
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
    </div>
  );
}
