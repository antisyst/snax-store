import { Link } from 'react-router-dom';
import { BsStar } from 'react-icons/bs';

import './Hero.scss';

const Hero = ({ subtitleHeading, subtitleFooter, offer, title, text }) => {
  return (
    <section className="hero py-5">
      <article className="hero__content">
        <h3 className="hero__offer">
          {subtitleHeading}

        </h3>
        <h3 className="hero__title">{title}</h3>
        <p className="hero__text">{text}</p>
        <Link to="/products" className="btn btn-grey">
          discover now
        </Link>
      </article>
    </section>
  );
};

export default Hero;
