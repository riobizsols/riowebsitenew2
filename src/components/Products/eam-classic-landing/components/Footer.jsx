import { ASSETS, SITE } from "../assets";

export default function Footer() {
  return (
    <footer className="v2-footer">
      <div className="v2-footer-inner">
        <a
          href={SITE.home}
          className="v2-footer-logo-link"
          aria-label="RIO BizSols Home"
        >
          <img
            src={ASSETS.logoFooter}
            alt="RIO"
            className="v2-footer-logo-img"
            decoding="async"
          />
        </a>
        <p className="v2-footer-line">
          RIO BizSols Pvt Ltd | Enterprise Asset Management Software | Demo
          Enquiries
        </p>
      </div>
    </footer>
  );
}
