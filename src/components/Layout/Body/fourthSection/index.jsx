import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { data, sliderSettings } from '../../../../data/FourthSectionData';
import { Row, Heading, Section, TextWrapper } from '../../../../globalStyles';
import {
  ButtonContainer,
  ReviewSlider,
  ImageWrapper,
  CarouselImage,
  CardButton,
} from './FourthSectionStyle';

const FouthSection = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    // dots: true,
    // prevArrow: true,
    // nextArrow: true,
  };
  return (
    <Section
      margin="auto"
      maxWidth="1280px"
      padding="70px"
      inverse
      id="partenaires"
    >
      <Row justify="space-between" margin="1rem" wrap="wrap">
        <Heading width="auto" inverse>
          NOS PARTENAIRES ET CLIENTS
        </Heading>
        <ButtonContainer>
          <IconContext.Provider value={{ size: '3rem', color: '#1d609c' }}>
            <FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
            <FaArrowCircleRight onClick={sliderRef?.slickNext} />
          </IconContext.Provider>
        </ButtonContainer>
      </Row>

      <ReviewSlider {...sliderSettings} ref={setSliderRef} {...settings}>
        {data.map((el, index) => (
          <ImageWrapper key={index}>
            <CarouselImage src={el.image} />
            <TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
              {el.title}
            </TextWrapper>
            <TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
              {el.description}
            </TextWrapper>
            {/* <CardButton>Learn More</CardButton> */}
          </ImageWrapper>
        ))}
      </ReviewSlider>
    </Section>
  );
};

export default FouthSection;
