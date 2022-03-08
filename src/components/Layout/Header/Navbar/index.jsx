import {
  Nav,
  NavBarContainer,
  NavLogo,
  Logo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavLinkR,
} from './Navbar.Styles';
import { FaBars } from 'react-icons/fa';
import Logoimg from '../../../../../assets/cropped-logo_coralio-7.png-7-180x180.png';
import { GrLanguage } from 'react-icons/gr';
import { animateScroll as scroll } from 'react-scroll';
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../firebase-config';

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const [navBar, setNavBar] = useState([]);
  const sectionCollectionRef = collection(db, 'header');
  useEffect(() => {
    const getNavBarData = async () => {
      const data = await getDocs(sectionCollectionRef);
      setNavBar(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getNavBarData();
  }, []);
  // console.log(navBar[1]);
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <Logo src={Logoimg} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinkR to="/" onClick={toggleHome}>
                Accueil
              </NavLinkR>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={1000}
                spy={true}
                offset={-80}
                activeClass="active"
              >
                Nos Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="clients"
                smooth={true}
                duration={1000}
                spy={true}
                offset={-80}
                activeClass="active"
              >
                Nos Clients
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="partenaires"
                smooth={true}
                duration={1000}
                spy={true}
                offset={-80}
              >
                Nos Partenaires
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinkR to="/contact">Nous Écrire</NavLinkR>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink>
              <GrLanguage />
            </NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
