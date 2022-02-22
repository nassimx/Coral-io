import React from 'react';
import { FaFacebook, FaMailBulk } from 'react-icons/fa';
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

import logoFooter from '../../../../assets/cropped-logo_coralio-6.png-6.png';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { GrLinkedin, GrMail } from 'react-icons/gr';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
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
              <SocialLogo to="/" onClick={toggleHome}>
                <LogoFooter src={logoFooter} />
              </SocialLogo>
              <WebsiteRights>
                © {new Date().getFullYear()} Coral-IO. Site Web par{' '}
                <a
                  style={{ textDecoration: 'none', color: '#1E88E5' }}
                  href="https://cutt.ly/nassimdev"
                  target="_blank"
                >
                  NassimDev
                </a>
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href="https://www.linkedin.com/company/coralio/"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <GrLinkedin />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.facebook.com/coralio.fr"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href="mailto:contact@coral-io.fr"
                  target="_blank"
                  aria-label="Mail"
                >
                  <GrMail />
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
