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
} from './Navbar.styles';
import { FaBars } from 'react-icons/fa';
import Logoimg from '../../../../../assets/cropped-logo_coralio-7.png-7-180x180.png';
import { GrLanguage } from 'react-icons/gr';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">
            <Logo src={Logoimg} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">HOME</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/services">SERVICES</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about">ABOUT</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/contact">CONTACT</NavLinks>
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
