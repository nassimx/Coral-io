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
  ContactForm,
  Col,
  FormGroup,
  Label,
  InputText,
  LabelSelect,
  InputTextArea,
} from '../components/Contact/ContactStyle';

import img from '../../assets/bgimg.jpeg';
import Logoimg from '../../assets/81.png';
import { GrFacebook, GrLinkedin, GrMail } from 'react-icons/gr';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

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
      {/* <Section smPadding="50px 10px" position="relative" inverse>
        <Container> */}
      <SectionContact>
        <ContactTitle>Contactez nous</ContactTitle>
        <ContactContainer>
          <ContactInfo>
            <ContactH4>Contact Information</ContactH4>
            <ContactText>Fill up the form</ContactText>
            <ContactIconText>
              <FaPhoneAlt />
              <ContactSpan href="tel:+33188329801" target="_blank">
                +33188329801
              </ContactSpan>
            </ContactIconText>
            <ContactIconText>
              <GrMail />
              <ContactSpan href="mailto:contact@coral-io.fr" target="_blank">
                contact@coral-io.fr
              </ContactSpan>
            </ContactIconText>
            <ContactIconText>
              <FaMapMarkerAlt />
              <ContactSpan
                href="https://goo.gl/maps/viQ5YDJdbAx6jPHZ7"
                target="_blank"
              >
                231 rue Saint Honoré – 75001 Paris
              </ContactSpan>
            </ContactIconText>
            <SocialMedia>
              <IconCircle
                href="https://www.linkedin.com/company/coralio/"
                target="_blank"
                aria-label="Linkedin"
              >
                <GrLinkedin />
              </IconCircle>
              <IconCircle
                href="https://www.facebook.com/coralio.fr"
                target="_blank"
                aria-label="Facebook"
              >
                <GrFacebook />
              </IconCircle>
            </SocialMedia>
          </ContactInfo>
          <ContactForm>
            <Col>
              <FormGroup>
                <Label>Prénom</Label>
                <InputText type="text" />
              </FormGroup>
              <FormGroup>
                <Label>Nom</Label>
                <InputText type="text" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>E-mail</Label>
                <InputText type="email" />
              </FormGroup>
              <FormGroup>
                <Label>Numéro de téléphone portable</Label>
                <InputText type="phone" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <LabelSelect for="objet">Intérêt</LabelSelect>
                <select name="objet" id="objet" form="objetemail">
                  <option value="volvo">question 1</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Message</Label>
                <InputTextArea placeholder="votre message ..." />
              </FormGroup>
            </Col>
          </ContactForm>
        </ContactContainer>
      </SectionContact>
      {/* </Container>
      </Section> */}
    </>
  );
};

export default Contact;
