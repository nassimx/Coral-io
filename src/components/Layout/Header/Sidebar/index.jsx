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
} from './SidebarStyles';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SidebarMenu>
            <SidebarLink to="/" onClick={toggle}>
              HOME
            </SidebarLink>
            <SidebarLink to="/services">SERVICES</SidebarLink>
            <SidebarLink to="/about">ABOUT</SidebarLink>
            <SidebarLink to="contact">CONTACT</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute>
              <GrLanguage />
            </SidebarRoute>
          </SideBtnWrap>
        </SideBarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
