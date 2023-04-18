import Banner from '../components/Banner/Banner';
import AboutInfo from '../components/AboutInfo/AboutInfo';
import Reviews from '../components/Reviews/Reviews';
import Hero from '../components/Hero/Hero';


const AboutPage = () => {
  return (
    <>
      <AboutInfo />
      <Reviews />
      <Hero
        subtitleHeading="All The Better Sneakers"
      />
    </>
  );
};

export default AboutPage;
