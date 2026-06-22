import dashboardDesktop from "../../../assets/images/rio-alm-dashboard f.png";
import logoHeader from "../../../assets/images/eam-rio-logo.png";
import logoFooterImg from "../../../assets/images/eam-rio-logo-footer.png";
import lifecycleLoopImg from "../../../assets/images/eam-lifecycle-loop.png";

/** Bundled assets — reliable on mobile when /public paths fail behind SPA routing */
export const ASSETS = {
  logo: logoHeader,
  logoFooter: logoFooterImg,
  dashboardDesktop,
  dashboardMobile: "/rio-alm-asset-management-mobile-640.png",
  lifecycleLoop: lifecycleLoopImg,
};

export const SITE = {
  home: "https://riobizsols.com/",
  page: "https://riobizsols.com/cmms-maintenance-management-software",
};

export const CONTACT = {
  whatsapp:
    "https://wa.me/918884910777?text=Hi%20RIO%20BizSols%2C%20I%20am%20interested%20in%20CMMS%20Software.%20Please%20contact%20me.",
  calendly:
    process.env.REACT_APP_CALENDLY_URL ||
    "https://calendly.com/tony-rozario-vs6w/30min",
};
