import React from 'react';
import {
  HeroBg,
  HeroContainer,
  ImgBg,
  Logo,
  Nav,
  NavBarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  HeroContent,
  HeroH1,
  ContactTitle,
  ContactContainer,
  ContactInfo,
  ContactH4,
  ContactText,
  ContactIconText,
  ContactSpan,
  SocialMedia,
  IconCircle,
  SectionContact,
  // ContactForm,
  Col,
  FormGroup,
  Label,
  InputText,
  LabelSelect,
  InputTextArea,
} from '../components/Contact/ContactStyle';
import GoogleMapReact from 'google-map-react';
import img from '../../assets/bgimg.jpeg';
import Logoimg from '../../assets/81.png';
import { GrFacebook, GrLinkedin, GrMail } from 'react-icons/gr';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

import Container from '../components/Contact/Container';
import Title from '../components/Contact/Title';
import CompanyInfo from './Form/CompanyInfo';
import ContactForm from '../pages/Form/ContactForm';
import { Section } from '../globalStyles';

import MapSection from '../components/Map'; // import the map here

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 48.8661778,
  lng: 2.3291679,
}; // our location object from earlier
const Contact = () => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">
            <Logo src={Logoimg} />
          </NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Accueil</NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
      <HeroContainer>
        <HeroBg>
          <ImgBg src={img} />
        </HeroBg>
        <HeroContent>
          <HeroH1>CONTACT</HeroH1>
        </HeroContent>
      </HeroContainer>
      <Container>
        <ContactTitle>Contactez nous</ContactTitle>

        {/* <Container wrapper> */}
        <CompanyInfo />
        {/* <ContactForm /> */}
        {/* </Container> */}

        <ContactTitle>Siége</ContactTitle>
        <MapSection location={location} zoomLevel={16} />
      </Container>
    </>
  );
};

export default Contact;
