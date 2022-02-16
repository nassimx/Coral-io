import React from 'react';
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
            <SidebarLink to="about" onClick={toggle}>
              About
            </SidebarLink>
            <SidebarLink to="about">About</SidebarLink>
            <SidebarLink to="about">About</SidebarLink>
            <SidebarLink to="about">About</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/sginin">sgin in</SidebarRoute>
          </SideBtnWrap>
        </SideBarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
