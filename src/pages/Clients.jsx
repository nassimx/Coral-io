import React from 'react';
import NavBarChange from '../components/Layout/Header/Navbar/NavBarChange';
import {
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroH1,
  ImgBg,
} from '../globalStyles';

import ClientBg from '../../assets/clientsimg.jpeg';

const Clients = () => {
  return (
    <>
      <NavBarChange />
      <HeroContainer>
        <HeroBg>
          <ImgBg src={ClientBg} />
        </HeroBg>
        <HeroContent>
          <HeroH1>Références</HeroH1>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Clients;
