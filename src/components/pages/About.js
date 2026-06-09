import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../../css/about-elegant.css';
import { FiTarget, FiUsers, FiZap, FiHeart } from 'react-icons/fi';
import LazyImage from '../LazyImage';
import {
  aboutHeroImage,
  aboutHeroOgImage,
  ABOUT_HERO_CLOUDINARY,
  cloudinarySrcSet,
} from '../../utils/cloudinary';

const ABOUT_HERO_WIDTH = 1340;
const ABOUT_HERO_HEIGHT = 521;
const HERO_SRC = aboutHeroImage(ABOUT_HERO_WIDTH);
const HERO_SRC_SET = cloudinarySrcSet(ABOUT_HERO_CLOUDINARY, [480, 768, 1024, 1340]);
const OG_IMAGE = aboutHeroOgImage();

const About = () => (
  <div>
    <Helmet>
      <title>About RioBizSols | Digital Solutions & Business Transformation Partner</title>
      <meta
        name="description"
        content="Learn about RioBizSols - your trusted partner for staffing, digital marketing, web/app development, Odoo ERP, and RIO EAM solutions. Meet our expert team committed to your business success."
      />
      <meta
        name="keywords"
        content="about RioBizSols, business consulting, digital transformation, staffing solutions, software development, enterprise ERP, team"
      />
      <meta name="author" content="RioBizSols" />
      <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
      <link rel="preload" as="image" href={HERO_SRC} fetchPriority="high" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="About RioBizSols | Digital Solutions & Business Transformation Partner"
      />
      <meta
        property="og:description"
        content="Learn about RioBizSols - your trusted partner for staffing, digital marketing, web/app development, Odoo ERP, and RIO EAM solutions."
      />
      <meta property="og:url" content="https://riobizsols.com/about" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:alt" content="RioBizSols Team - Digital Business Solutions" />
      <meta property="og:site_name" content="RioBizSols" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="About RioBizSols | Digital Solutions & Business Transformation Partner"
      />
      <meta
        name="twitter:description"
        content="Meet the RioBizSols team - experts in staffing, digital marketing, web/app development, Odoo ERP, and RIO EAM."
      />
      <meta name="twitter:image" content={OG_IMAGE} />
      <link rel="canonical" href="https://riobizsols.com/about" />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'RioBizSols',
          url: 'https://riobizsols.com',
          description:
            'End-to-end business solutions provider offering staffing, digital marketing, web & app development, Odoo ERP, and RIO EAM.',
          image: OG_IMAGE,
          sameAs: [
            'https://www.linkedin.com/company/riobizsols',
            'https://www.facebook.com/riobizsols',
            'https://www.youtube.com/riobizsols',
          ],
        })}
      </script>
    </Helmet>

    <div className="about-banner">
      <div className="about-image-wrapper">
        <LazyImage
          className="about-main-image"
          src={HERO_SRC}
          srcSet={HERO_SRC_SET}
          sizes="100vw"
          alt="RioBizSols team collaborating in the office"
          width={ABOUT_HERO_WIDTH}
          height={ABOUT_HERO_HEIGHT}
          priority
        />
        <h1 className="about-title">About RIO BizSols</h1>
      </div>
    </div>

    <div className="about-intro">
      <h2>We Are RIO BizSols</h2>
      <p className="lead-text">
        Your go-to gurus for all things staffing, marketing, and digital transformation. We do it all,
        saving you time, money, and headaches.
      </p>
      <p className="body-text">
        Think of us as your business&apos;s secret weapon, helping you find the right people and making
        your brand the talk of the town. We are excited to be part of your success story. With a team
        that&apos;s as skilled as it is friendly, we are always well prepared with a bunch of creative
        people and endless cups of chai to make your life easier and your business better. We are here
        to make your business journey smoother, faster, and a whole lot more fun.
      </p>
    </div>

    <div className="core-values">
      <h2>Our Core Values</h2>
      <div className="values-grid">
        <div className="value-card">
          <div className="value-icon">
            <FiTarget aria-hidden="true" />
          </div>
          <h3>Customer Delight</h3>
          <p>
            You talk, we listen. Your goals are our goals, and we won&apos;t rest until you are thrilled
            with the results.
          </p>
        </div>
        <div className="value-card">
          <div className="value-icon">
            <FiUsers aria-hidden="true" />
          </div>
          <h3>Expert Team</h3>
          <p>
            Our skilled and friendly team is always prepared with creative solutions and genuine passion
            for your success.
          </p>
        </div>
        <div className="value-card">
          <div className="value-icon">
            <FiZap aria-hidden="true" />
          </div>
          <h3>Innovation</h3>
          <p>
            We embrace new ideas and cutting-edge technologies to deliver exceptional results for your
            business.
          </p>
        </div>
        <div className="value-card">
          <div className="value-icon">
            <FiHeart aria-hidden="true" />
          </div>
          <h3>Commitment</h3>
          <p>
            From first conversation to project completion, we support you with enthusiasm and unwavering
            dedication.
          </p>
        </div>
      </div>
    </div>

    <div className="what-we-do">
      <h2>What We Do</h2>
      <div className="services-highlight">
        <div className="service-highlight-item">
          <h4>Product Development</h4>
          <p>We design and develop innovative software products tailored to solve real-world business challenges.</p>
        </div>
        <div className="service-highlight-item">
          <h4>Enterprise Solutions</h4>
          <p>From Odoo ERP to custom systems, we build scalable enterprise software for organizations of all sizes.</p>
        </div>
        <div className="service-highlight-item">
          <h4>Web &amp; Mobile Apps</h4>
          <p>Full-stack development services for web applications, mobile apps, and responsive digital experiences.</p>
        </div>
        <div className="service-highlight-item">
          <h4>Staffing &amp; Consulting</h4>
          <p>Expert technical talent and consulting services to augment your development team&apos;s capabilities.</p>
        </div>
      </div>
    </div>

    <div className="why-choose-us">
      <h2>Why Choose Us</h2>
      <div className="reasons-list">
        <div className="reason-item">
          <span className="reason-number" aria-hidden="true">✓</span>
          <div className="reason-content">
            <h4>Proven Track Record</h4>
            <p>We have helped loads of businesses shine and we&apos;re ready to do the same for you.</p>
          </div>
        </div>
        <div className="reason-item">
          <span className="reason-number" aria-hidden="true">✓</span>
          <div className="reason-content">
            <h4>End-to-End Support</h4>
            <p>We go the extra mile to ensure you&apos;re not just satisfied but delighted with our services.</p>
          </div>
        </div>
        <div className="reason-item">
          <span className="reason-number" aria-hidden="true">✓</span>
          <div className="reason-content">
            <h4>Diverse Expertise</h4>
            <p>From staffing to technology, marketing to business consulting - we cover all your needs.</p>
          </div>
        </div>
        <div className="reason-item">
          <span className="reason-number" aria-hidden="true">✓</span>
          <div className="reason-content">
            <h4>Partnership Approach</h4>
            <p>We view ourselves as your partner in success, not just another vendor.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="about-cta">
      <h2>Ready to Transform Your Business?</h2>
      <p>Let&apos;s connect and discuss how we can help you achieve your goals.</p>
      <Link to="/contact" className="cta-button">
        Get Started Today
      </Link>
    </div>
  </div>
);

export default About;
