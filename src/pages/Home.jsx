import Hero from '../components/Layout/Body/FirstSection';
import SecendSection from '../components/Layout/Body/SecondSection';
import { ThirdSection } from '../components/Layout/Body/ThirdSection';
import Footer from '../components/Layout/Footer';
import { homeObjOne } from '../data//FirstSectionData';
import { heroOne, heroThree, heroTwo } from '../data/ThirdSectionData';
import { motion } from 'framer-motion';
import FouthSection from '../components/Layout/Body/fourthSection';

const Home = () => {
  return (
    <>
      {/* <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.6 }}
      > */}
      <Hero {...homeObjOne} />
      <SecendSection />
      <ThirdSection {...heroOne} />
      <ThirdSection {...heroTwo} />
      <ThirdSection {...heroThree} />
      <FouthSection />

      {/* <Footer /> */}
      {/* </motion.div> */}
    </>
  );
};

export default Home;
