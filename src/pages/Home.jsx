import Hero from '../components/Layout/Body/FirstSection';
import SecendSection from '../components/Layout/Body/SecondSection';
import { ThirdSection } from '../components/Layout/Body/ThirdSection';
import Footer from '../components/Layout/Footer';
import { homeObjOne } from '../data//FirstSectionData';
import { heroOne, heroThree, heroTwo } from '../data/ThirdSectionData';

const Home = () => {
  return (
    <>
      <Hero {...homeObjOne} />
      <SecendSection />
      <ThirdSection {...heroOne} />
      <ThirdSection {...heroTwo} />
      <ThirdSection {...heroThree} />

      <Footer />
    </>
  );
};

export default Home;
