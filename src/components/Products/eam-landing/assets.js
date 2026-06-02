import logo from "../../../assets/images/RIO-Logo.png";
import dashboardDesktop from "../../../assets/images/rio-alm-dashboard f.png";

/** Local + public assets for the CMMS v2 landing page */
export const ASSETS = {
  logo,
  logoFooter: logo,
  dashboardDesktop,
  dashboardMobile: "/rio-alm-asset-management-mobile.png",
  lifecycleLoop: "/lifecycle-loop.png",
};

export const SITE = {
  home: "https://riobizsols.com/",
  page: "https://riobizsols.com/cmms-maintenance-management-software",
};

export const CONTACT = {
  whatsapp:
    "https://wa.me/918884910777?text=Hi%20RIO%20BizSols%2C%20I%20would%20like%20to%20know%20more%20about%20RIO%20CMMS",
  calendly:
    process.env.REACT_APP_CALENDLY_URL ||
    "https://calendly.com/tony-rozario-vs6w/30min",
};
