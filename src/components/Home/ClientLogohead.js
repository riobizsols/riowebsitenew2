import '../../css/Clientlogo.css';
import LazyImage from '../LazyImage';
import { clientLogoImage } from '../../utils/cloudinary';

const CLIENT_LOGOS = [
  { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599923/rio_main_website/cm2ual5i2rb60xpdvo2f.jpg', alt: 'Kumaraguru College client logo' },
  { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599891/rio_main_website/wqnu2tv7fqca4xzlzfny.jpg', alt: 'Amazon client logo' },
  { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599892/rio_main_website/emji2okoikkynjs5gkxi.jpg', alt: 'Aplus client logo' },
  { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599904/rio_main_website/byfeygcgtqndlktuerbj.jpg', alt: 'Dare2escape client logo' },
  { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599922/rio_main_website/o261jmycfmgsrp8jatpp.jpg', alt: 'Khadheejah client logo' },
  { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599923/rio_main_website/zf5eo70focqreqzrial1.jpg', alt: 'KM Decors client logo' },
  { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599937/rio_main_website/tjnywqleyex72rxpfogo.jpg', alt: 'Shobha client logo' },
  { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599925/rio_main_website/tirnxnww9qmnxcfnv4nb.png', alt: 'Studieo7 client logo' },
  { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599926/rio_main_website/kahnwjqxt0a3qesf23hw.png', alt: 'Studio11 client logo' },
  { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599925/rio_main_website/cscpsjpnozomodirhjgx.png', alt: 'Hydro client logo' },
  { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599913/rio_main_website/xcoihvjmf4jctk88uryc.jpg', alt: 'Flipkart client logo' },
  { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599890/rio_main_website/cqakmrqlbjeqqjhvfu0c.jpg', alt: 'Waffel client logo' },
  { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599890/rio_main_website/bz2qqssyxzfciep8yfpv.jpg', alt: 'Rotol client logo' },
  { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599890/rio_main_website/qafpvzgvch2iep6vlloa.jpg', alt: 'Plush client logo' },
  { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599891/rio_main_website/rxsl535dhbrolpuzayjn.jpg', alt: 'Grace client logo' },
  { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599891/rio_main_website/ronnusvbk5w3ecgzlcly.jpg', alt: 'Bloom client logo' },
  { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599891/rio_main_website/vtxc4mp0ijrs9k3nklro.jpg', alt: 'EE client logo' },
  { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599891/rio_main_website/pzxugkk0rf8h8htl5irt.jpg', alt: 'SK client logo' },
  { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599891/rio_main_website/mopvg37qvlk6xyvkrlom.jpg', alt: 'Raajis client logo' },
];

function Clientlogohead() {
  return (
    <div className="client-logo">
      <h2 className="client">Our Clients</h2>
      <div className="logo">
        <div className="logo-slid">
          {CLIENT_LOGOS.map(({ src, alt }) => (
            <LazyImage
              key={alt}
              src={clientLogoImage(src, 140)}
              alt={alt}
              width={140}
              height={70}
              className="client-logo-img"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clientlogohead;
