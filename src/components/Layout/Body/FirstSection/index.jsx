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

const FirstSection = ({ title, subtitle, description, buttonLabel, video }) => {
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>{title}</HeroH1>
          <HeroH2>{subtitle}</HeroH2>
          <HeroP>{description}</HeroP>
          <HeroBtnWrapper>
            <Button>{buttonLabel}</Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default FirstSection;
