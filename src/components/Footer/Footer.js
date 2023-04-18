import { contactInfo, myAccount } from '../../utils/footerInfo';

import footerLogo from '../../assets/images/hogash-logo.png';
import paymentLogo from '../../assets/images/payment.png';

import SocialIcons from '../SocialIcons/SocialIcons';

import './Footer.scss';

const Footer = () => {
  return (
    <section className="site-footer py-5">
        <h3>Developed by <a href='https://rmzn.netlify.app' target='_blank'>Ramazan Azimli</a></h3>
        <p>Copyright 2023 ©</p>
    </section>
  );
};

export default Footer;
