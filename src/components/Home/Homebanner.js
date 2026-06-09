import { Link } from 'react-router-dom';
import LazyImage from '../LazyImage';
import '../../css/Homebanner.css';
import bannerhome from '../../assets/images/banner-home.png';
import { cloudinarySrcSet, homeHeroImage } from '../../utils/cloudinary';

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
    </svg>
  );
}

const HERO_WIDTHS = [400, 560, 720, 900];
const heroSrc = homeHeroImage(720);
const heroSrcSet = cloudinarySrcSet(
  'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599895/rio_main_website/u9grcwa3mm6fz6e816nn.png',
  HERO_WIDTHS
);

function Homebanner() {
  return (
    <div className="banner-wrapper">
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-12 homebanner-text-col">
              <h1 className="homebanner-title">End-to-End Business Solutions Provider</h1>
              <p className="homebanner-des">
                Let us help you succeed with tailored solutions, every step of the way.
                Together, we turn your business goals into reality.
              </p>
              <Link to="/contact">
                <button type="button" className="get-started">
                  LET&apos;S CONNECT <ArrowIcon />
                </button>
              </Link>
            </div>
            <div className="col-lg-5 col-12 homebanner-img-col">
              <LazyImage
                src={heroSrc}
                srcSet={heroSrcSet}
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 520px"
                alt="RIOBizSols business solutions team collaborating"
                className="homebanner-img"
                width={720}
                height={480}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="banner-mob">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <LazyImage
                src={bannerhome}
                alt="RIOBizSols digital solutions"
                className="homebanner-img"
                width={400}
                height={300}
                priority
              />
            </div>
            <div className="col-lg-6">
              <h1 className="homebanner-title">End-to-End Business Solutions Provider</h1>
              <p className="homebanner-des">
                Let us help you succeed with tailored solutions, every step of the way.
                Together, we turn your business goals into reality.
              </p>
              <Link to="/contact" style={{ textDecoration: 'none', color: 'White' }}>
                <button type="button" className="banner-button">
                  Let&apos;s Connect
                  <span className="button-icon">
                    <ArrowIcon />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homebanner;
