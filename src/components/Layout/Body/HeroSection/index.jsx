import React, { useEffect, useState } from 'react';
import {
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroP,
  VideoBg,
} from './Hero.Style';
import { Button } from '../../../../globalStyles';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../firebase-config';

const Hero = ({}) => {
  const initial = {
    y: 0,
    opacity: 0,
    scale: 1,
  };
  const animate = {
    y: 0,
    opacity: 1,
    scale: 1.5,
  };
  const [section1, setSection1] = useState([]);
  const sectionCollectionRef = collection(db, 'section1');
  useEffect(() => {
    const getSectionData = async () => {
      const data = await getDocs(sectionCollectionRef);
      setSection1(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getSectionData();
  }, []);
  return (
    <>
      {section1.map((el, index) => {
        return (
          <HeroContainer>
            <HeroBg>
              <VideoBg autoPlay loop muted src={el.video} />
            </HeroBg>
            <HeroContent>
              <HeroH1
                initial={initial}
                animate={animate}
                transition={{ duration: 1 }}
                whileHover={{
                  scale: 1,
                  transition: { duration: 1 },
                }}
                key={index}
              >
                {el.title}
              </HeroH1>
              <HeroH2>{el.subtitle}</HeroH2>
              <HeroP>{el.description}</HeroP>
              <HeroBtnWrapper>
                <Link to="/contact">
                  <Button>{el.buttonLabel}</Button>
                </Link>
              </HeroBtnWrapper>
            </HeroContent>
          </HeroContainer>
        );
      })}
    </>
  );
};

export default Hero;
