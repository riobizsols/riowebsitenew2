import Homebanner from '../Home/Homebanner';
import LazyWhenVisible from '../LazyWhenVisible';
import { Helmet } from 'react-helmet-async';
import { homeHeroImage } from '../../utils/cloudinary';

const loadClientLogohead = () => import('../Home/ClientLogohead');
const loadIndustrySection = () => import('../Home/IndustrySection');
const loadStory = () => import('../Home/Story');
const loadCount = () => import('../Home/Count');
const loadTeam = () => import('../Home/Team');
const loadHomeContact = () => import('../Home/HomeContact');

const HERO_PRELOAD = homeHeroImage(720);

function Home() {
  return (
    <div>
      <Helmet>
        <title>RIO BizSols | Enterprise Software & AI Business Solutions</title>
        <meta
          name="description"
          content="RIO BizSols Pvt. Ltd. is a product-based technology company delivering enterprise software and AI-powered business solutions."
        />
        <meta
          name="keywords"
          content="business solutions, digital marketing, staffing services, web development, app development, Odoo ERP, enterprise asset managment, business consulting"
        />
        <meta name="author" content="RioBizSols" />
        <link rel="canonical" href="https://riobizsols.com" />
        <meta name="robots" content="index, follow" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preload" as="image" href={HERO_PRELOAD} fetchPriority="high" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RIO BizSols | Enterprise Software & AI Business Solutions" />
        <meta
          property="og:description"
          content="RIO BizSols Pvt. Ltd. is a product-based technology company delivering enterprise software and AI-powered business solutions."
        />
        <meta property="og:url" content="https://riobizsols.com" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dhzg3dnfc/image/upload/f_auto,q_auto,w_1200/v1732599895/rio_main_website/u9grcwa3mm6fz6e816nn.png"
        />
        <meta property="og:image:alt" content="RioBizSols - End-to-End Business Solutions" />
        <meta property="og:site_name" content="RioBizSols" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RIO BizSols | Enterprise Software & AI Business Solutions" />
        <meta
          name="twitter:description"
          content="RIO BizSols Pvt. Ltd. is a product-based technology company delivering enterprise software and AI-powered business solutions."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dhzg3dnfc/image/upload/f_auto,q_auto,w_1200/v1732599895/rio_main_website/u9grcwa3mm6fz6e816nn.png"
        />
      </Helmet>

      <Homebanner />
      <LazyWhenVisible loader={loadClientLogohead} minHeight={160} rootMargin="0px 0px 120px 0px" />
      <LazyWhenVisible loader={loadIndustrySection} minHeight={320} rootMargin="0px 0px 120px 0px" />
      <LazyWhenVisible loader={loadStory} minHeight={320} rootMargin="0px 0px 100px 0px" />
      <LazyWhenVisible loader={loadCount} minHeight={200} rootMargin="0px 0px 100px 0px" />
      <LazyWhenVisible loader={loadTeam} minHeight={360} rootMargin="0px 0px 100px 0px" />
      <LazyWhenVisible loader={loadHomeContact} minHeight={280} rootMargin="0px 0px 100px 0px" />
    </div>
  );
}

export default Home;
