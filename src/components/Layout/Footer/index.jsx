import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  LogoFooter,
  // Maploc,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from './FooterStyle';

import LogoWhite from '../../../../assets/cropped-logo_coralio-6.png-6.png';
const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About US</FooterLinkTitle>
                <FooterLink to="/">How it work</FooterLink>
                <FooterLink to="/">How it work</FooterLink>
                <FooterLink to="/">How it work</FooterLink>
                <FooterLink to="/">How it work</FooterLink>
                <FooterLink to="/">How it work</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>About US</FooterLinkTitle>
                <FooterLink to="/">How it work</FooterLink>
                <FooterLink to="/">How it work</FooterLink>
                <FooterLink to="/">How it work</FooterLink>
                <FooterLink to="/">How it work</FooterLink>
                <FooterLink to="/">How it work</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>About US</FooterLinkTitle>
                <FooterLink to="/">How it work</FooterLink>
                <FooterLink to="/">How it work</FooterLink>
                <FooterLink to="/">How it work</FooterLink>
                <FooterLink to="/">How it work</FooterLink>
                <FooterLink to="/">How it work</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>About US</FooterLinkTitle>
                <FooterLink to="/">How it work</FooterLink>
                <FooterLink to="/">How it work</FooterLink>
                <FooterLink to="/">How it work</FooterLink>
                <FooterLink to="/">How it work</FooterLink>
                <FooterLink to="/">How it work</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            {/* <Maploc src="https://s3.amazonaws.com/assets.fullstack.io/n/20200317063311541_react-google-maps.png" /> */}
          </FooterLinksContainer>

          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/">
                <LogoFooter src={LogoWhite} />
              </SocialLogo>
              <WebsiteRights>
                © {new Date().getFullYear()} Coral-IO. Site Web par NassimDev
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
