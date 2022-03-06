import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  /* height: -80px; */
  /* width: 30%; */

  font-size: 1rem;
  position: absolute;
  /* top: 1vw; */
  left: 10vw;
  /* margin-left: 20%; */
  z-index: 11;
  //trasparent
  background: rgba(255, 255, 255, 0.5);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  /* background: red; */
  border-radius: 10px;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    position: sticky;
    margin-top: 5px;
    border-radius: 0px;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* height: -80px; */
  z-index: 1;
  width: 100%;
  padding: 1px 30px 1px 10px;
  /* max-width: 1100px; */
`;

export const NavLogo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  /* margin-left: 24px; */
  font-weight: bold;
  text-decoration: none;
`;
export const Logo = styled.img`
  /* width: 45%; */

  @media screen and (max-width: 960px) {
    /* width: 35%; */
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    /* display: none; */
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkR)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: 'Lato', sans-serif;

  &:hover {
    color: #0a66c2;
    transition: all 0.3s ease-out;
  }
  &active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const HeroContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0 30px;
  height: 300px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 960px) {
    height: 200px;
  }

  @media screen and (max-width: 460px) {
    height: 150px;
  }
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media screen and (max-width: 960px) {
  }
`;

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #fff;
  @media screen and (max-width: 960px) {
    /* height: 30%; */
  }
  @media screen and (max-width: 460px) {
    /* height: 20%; */
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* check text al */
  /* margin-top: 10vh; */

  @media screen and (max-width: 768px) {
    /* padding: 30% 0; */
    /* margin-top: 7vh; */
  }
  @media screen and (max-width: 480px) {
    /* padding: 30% 0; */
    /* margin-top: 5vh; */
  }
`;

export const HeroH1 = styled(motion.h1)`
  color: #fff;
  /* font-size: 48px; */
  margin: auto;

  /* font-family: 'BunkenTechSansProWideW01-Bk'; */
  text-align: center;
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  line-height: 1.06;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const SectionContact = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;

  /* padding: 50px; */
`;

export const ContactTitle = styled.h2`
  text-align: center;
  font-size: clamp(1rem, 13vw, 2rem);
  line-height: 1.06;
  /* letter-spacing: 0.4rem; */
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const ContactContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  position: relative;
  /* display: block; */
  /* grid-template-columns: repeat(2, 1fr); */
  /* max-width: 1100px; */
  /* min-width: 300px; */
  border-radius: 15px;
  overflow: hidden;
  padding: 20px;
  background: whitesmoke;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  } ;
`;
export const ContactInfo = styled.div`
  background-color: #1d609c;
  border-radius: 15px;
  flex: 0 1 40%;
  padding: 40px;
  color: white;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: start; */
`;

export const ContactH4 = styled.h4`
  font-size: 2rem;
  font-weight: 500;
  /* margin-top: 0; */
  flex: 0 0 50px;

  margin: 0;
`;
export const ContactText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;
export const ContactIconText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* flex: 0 0 40px; */
  margin-bottom: 2rem;

  /* color: limegreen; */
  font-size: 1.6em;
  /* padding: 1rem; */
`;
export const ContactSpan = styled.a`
  font-size: 1.3rem;
  font-weight: 300;
  text-decoration: none;
  color: white;
  margin-left: 2rem;
`;
export const SocialMedia = styled.div`
  display: flex;
  width: 100%;
  padding: 3rem 0rem 1rem 0rem;
  /* background: black; */
  /* justify-content: space-between; */
  font-size: 1.3rem;
  align-items: center;
  /* margin-top: 2rem; */
`;
export const IconCircle = styled.a`
  color: white;
  flex: 0 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;

  :hover {
    background: #ff7f50;
  }
`;
export const ContactForm = styled.form`
  padding: 40px;
  width: 100%;
`;

export const Col = styled.div`
  display: flex;
  width: 100%;
  flex: 0 0 100%;
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex: 0 1 100%;
  padding-right: 40px;
  /* padding-bottom: 10px; */
  select {
    padding: 10px;
    /* border: none; */
    outline: none;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 5px;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;
export const Label = styled.label`
  display: flex;
  font-size: 0.9;
  margin-bottom: 1rem;
  /* padding-top: 5px; */
  /* margin: 10px; */
  &:nth-child(2) {
    padding-right: 0;
  }
`;
export const InputText = styled.input`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  border: 0.1px solid rgba(128, 128, 128, 0.5);
  padding: 10px;
  font-size: 1.2rem;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  margin-bottom: 1rem;

  &:focus {
    border-bottom: 2px solid gray;
    outline: none;
  }
`;

export const LabelSelect = styled.label`
  display: flex;
  font-size: 0.9;
  margin-bottom: 1rem;
  /* padding-top: 5px; */
  /* margin: 10px; */
`;
export const InputTextArea = styled.textarea`
  height: 100px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  border: 0.1px solid rgba(128, 128, 128, 0.5);
  padding: 10px;
  font-size: 1.2rem;
  font-weight: 500;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-bottom: 2px solid gray;
    outline: none;
  }
`;
