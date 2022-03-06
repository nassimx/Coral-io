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
} from './Navbar.styles';
import { FaBars } from 'react-icons/fa';
import Logoimg from '../../../../../assets/cropped-logo_coralio-7.png-7-180x180.png';
import { GrLanguage } from 'react-icons/gr';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
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
              <NavLinks
                to="/"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
                onClick={toggleHome}
              >
                Accueil
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                Nos Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="clinets"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-80}
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
                exact="true"
                offset={-80}
              >
                Nos Partenaires
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinkR to="/contact">Nous écrire</NavLinkR>
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
