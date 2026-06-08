import '../../css/Ser.css';
import Divider from '@mui/material/Divider';
import LazyWhenVisible from '../LazyWhenVisible';
import { Link } from 'react-router-dom';

const loadClientlogo = () => import('../Home/Clientlogo');

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6 18L18 6M18 6h-8M18 6v8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const services = [
  { n: '01', title: 'Digital Marketing', img: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599906/rio_main_website/ntixfkstcjws2zse42yo.jpg', link: '/our-service/digital-marketing/', imgFirst: true },
  { n: '02', title: 'Web Development', img: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599951/rio_main_website/yezvyawfuuwbcfw1ho8o.jpg', link: '/our-service/web-development/', imgFirst: false },
  { n: '03', title: 'App Develpment', img: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599894/rio_main_website/qvbwvkzbmlyx522ukbrd.png', link: '/our-service/app-development', imgFirst: false },
  { n: '04', title: 'Staffing', img: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599940/rio_main_website/b0xkxci7a8zsd4qtolpa.jpg', link: '/our-service/staffing', imgFirst: false },
  { n: '05', title: 'ERP Software', img: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599909/rio_main_website/njlq9t6xhuyqpnrk2fax.jpg', link: '/our-service/odoo/', imgFirst: false },
  { n: '06', title: 'Intellectual Property Rights', img: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599921/rio_main_website/y0yylbskh7i9ldxi0mz7.jpg', link: '/our-service/ipr/', imgFirst: false },
];

function ServiceCard({ n, title, img, link, imgFirst }) {
  const arrow = link ? (
    <p>
      <Link to={link}>
        <ArrowIcon />
      </Link>
    </p>
  ) : (
    <p>
      <ArrowIcon />
    </p>
  );

  const image = (
    <img
      src={img}
      alt={title}
      className="ser_img"
      width={600}
      height={400}
      loading="lazy"
      decoding="async"
    />
  );

  return (
    <div className="ser">
      {imgFirst ? image : null}
      <h2>{n}</h2>
      {arrow}
      <h3>{title}</h3>
      {!imgFirst ? image : null}
    </div>
  );
}

export const MainServices = () => (
  <div>
    <h1 className="ser_title">We Provide</h1>

    <div className="container">
      <div className="row">
        {services.slice(0, 2).map((s) => (
          <div className="col-md-6" key={s.n}>
            <ServiceCard {...s} />
          </div>
        ))}
      </div>
    </div>
    <div className="container">
      <div className="row">
        {services.slice(2, 4).map((s) => (
          <div className="col-md-6" key={s.n}>
            <ServiceCard {...s} />
          </div>
        ))}
      </div>
    </div>
    <div className="container">
      <div className="row">
        {services.slice(4, 6).map((s) => (
          <div className="col-md-6" key={s.n}>
            <ServiceCard {...s} />
          </div>
        ))}
      </div>
    </div>
    <div className="container">
      <Divider className="col-12 col-md-6 divider-ser" />
      <div className="client">
        <p className="client_subhead">OUR CLIENT</p>
        <h2>Trusted By 1,000+ Companies</h2>
        <LazyWhenVisible loader={loadClientlogo} minHeight={120} />
      </div>
    </div>
  </div>
);
