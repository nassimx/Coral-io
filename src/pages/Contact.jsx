import React from 'react';
import { ContactTitle } from '../components/Contact/ContactStyle';

import img from '../../assets/bgimg.jpeg';

import Container from '../components/Contact/Container';

import CompanyInfo from './Form/CompanyInfo';
// import ContactForm from '../pages/Form/ContactForm';

import MapSection from '../components/Map/Map'; // import the map here
import NavBarChange from '../components/Layout/Header/Navbar/NavBarChange';
import {
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroH1,
  ImgBg,
} from '../globalStyles';

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 48.8661778,
  lng: 2.3291679,
}; // our location object from earlier
const Contact = () => {
  return (
    <>
      <NavBarChange />
      <HeroContainer>
        <HeroBg>
          <ImgBg src={img} />
        </HeroBg>
        <HeroContent>
          <HeroH1>Contact</HeroH1>
        </HeroContent>
      </HeroContainer>
      <Container>
        <ContactTitle>Contactez nous</ContactTitle>

        <CompanyInfo />

        <ContactTitle>Siége</ContactTitle>
        <MapSection location={location} zoomLevel={16} />
      </Container>
    </>
  );
};

export default Contact;
