import Homebanner from '../Home/Homebanner';
import ClientLogohead from '../Home/ClientLogohead';
import IndustrySection from '../Home/IndustrySection';
import LazyWhenVisible from '../LazyWhenVisible';
import { Helmet } from 'react-helmet-async';

const loadStory = () => import('../Home/Story');
const loadCount = () => import('../Home/Count');
const loadTeam = () => import('../Home/Team');
const loadHomeContact = () => import('../Home/HomeContact');

function Home() {
  return (
    <div>
      <Helmet>
        <title>Digital Solutions for Business Growth | RioBizSols</title>
        <meta
          name="description"
          content="RioBizSols provides staffing, digital marketing, web & app development, Odoo ERP, and RIO EAM solutions. Scale your business with our end-to-end digital transformation services."
        />
        <meta
          name="keywords"
          content="business solutions, digital marketing, staffing services, web development, app development, Odoo ERP, enterprise asset managment, business consulting"
        />
        <meta name="author" content="RioBizSols" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Digital Solutions for Business Growth | RioBizSols" />
        <meta
          property="og:description"
          content="RioBizSols provides staffing, digital marketing, web & app development, Odoo ERP, and RIO EAM solutions. Scale your business with our end-to-end digital transformation services."
        />
        <meta property="og:url" content="https://riobizsols.com" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599895/rio_main_website/u9grcwa3mm6fz6e816nn.png"
        />
        <meta property="og:image:alt" content="RioBizSols - End-to-End Business Solutions" />
        <meta property="og:site_name" content="RioBizSols" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Solutions for Business Growth | RioBizSols" />
        <meta
          name="twitter:description"
          content="RioBizSols provides staffing, digital marketing, web & app development, Odoo ERP, and RIO EAM solutions."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599895/rio_main_website/u9grcwa3mm6fz6e816nn.png"
        />
        <link rel="canonical" href="https://riobizsols.com" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
      </Helmet>

      <Homebanner />
      <ClientLogohead />
      <IndustrySection />
      <LazyWhenVisible loader={loadStory} minHeight={320} rootMargin="0px 0px 100px 0px" />
      <LazyWhenVisible loader={loadCount} minHeight={200} rootMargin="0px 0px 100px 0px" />
      <LazyWhenVisible loader={loadTeam} minHeight={360} rootMargin="0px 0px 100px 0px" />
      <LazyWhenVisible loader={loadHomeContact} minHeight={280} rootMargin="0px 0px 100px 0px" />
    </div>
  );
}

export default Home;
