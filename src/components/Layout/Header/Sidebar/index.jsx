import React from 'react';
import { GrLanguage } from 'react-icons/gr';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SideBarWrapper,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  ContactSidebarLink,
} from './SidebarStyles';
import { animateScroll as scroll } from 'react-scroll';

const Sidebar = ({ isOpen, toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
    toggle();
  };
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SidebarMenu>
            <SidebarLink
              to="/"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              offset={-80}
              onClick={toggleHome}
            >
              Accueil
            </SidebarLink>
            <SidebarLink
              to="services"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              offset={-80}
              activeClass="active"
              onClick={toggle}
            >
              Services
            </SidebarLink>
            <SidebarLink
              to="partenaires"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              offset={-80}
              onClick={toggle}
            >
              Nos partenaires et clients
            </SidebarLink>
            <ContactSidebarLink to="/contact">Contact</ContactSidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/" onClick={toggle}>
              <GrLanguage />
            </SidebarRoute>
          </SideBtnWrap>
        </SideBarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
