import React from 'react';
import {
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroP,
  VideoBg,
} from './FirstSectionStyle';
import { Button } from '../../../../globalStyles';
import { Link } from 'react-router-dom';

const FirstSection = ({ title, subtitle, description, buttonLabel, video }) => {
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

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={video} type="video/mp4" />
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
          >
            {title}
          </HeroH1>
          <HeroH2>{subtitle}</HeroH2>
          <HeroP>{description}</HeroP>
          <HeroBtnWrapper>
            <Link to="/contact">
              <Button>{buttonLabel}</Button>
            </Link>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default FirstSection;
