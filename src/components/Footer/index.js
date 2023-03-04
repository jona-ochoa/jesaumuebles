import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaFreeCodeCamp,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRight,
  SocialIconsLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle to='/'>Servicios</FooterLinkTitle>
              <FooterLink to='/signin'>Muebles</FooterLink>
              <FooterLink to='/signin'>Colchones</FooterLink>
              <FooterLink to='/signin'>Sillas Gamer</FooterLink>
              <FooterLink to='/signin'>Electros</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Ciudades</FooterLinkTitle>
              <FooterLink to='/signin'>Villa del Totoral</FooterLink>
              <FooterLink to='/signin'>Dean Funes</FooterLink>
              <FooterLink to='/signin'>Chalasea</FooterLink>
              <FooterLink to='/signin'>Las Peñas</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Contacto</FooterLinkTitle>
              <FooterLink to='/signin'>Telefono: +54-3525-619061</FooterLink>
              
              <FooterLink to='/signin'>Email: jesaumuebles@gmail.com</FooterLink>
              
              <FooterLink to='/signin'>Soporte: soporte.jesau@gmail.com</FooterLink>
              
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              jesaumuebles
            </SocialLogo>
            <WebsiteRight>
              © {new Date().getFullYear()} jesaumuebles
            </WebsiteRight>

            <SocialIconsLink
              href="mailto:jesaumuebles@gmail.com"
              target="_blank"
              aria-label="Email"
            >
              <AiOutlineMail />
            </SocialIconsLink>

            <SocialIconsLink
              href="//www.instagram.com/jonanochoa/?hl=es-la"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconsLink>

            <SocialIconsLink
              href="//github.com/jona-ochoa"
              target="_blank"
              aria-label="GitHub"
            >
              <FaGithub />
            </SocialIconsLink>

            <SocialIconsLink
              href="//www.linkedin.com/in/jonatan-ochoa-developer/"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </SocialIconsLink>

            <SocialIconsLink
              href="https://wa.me/543525619061?text=Hola%20Jonacode"
              target="_blank"
              aria-label="Whatsapp"
            >
              <FaWhatsapp />
            </SocialIconsLink>

            <SocialIconsLink
              href="https://www.freecodecamp.org/certification/jona-ochoa/responsive-web-design"
              target="_blank"
              aria-label="FreeCodeCamp"
            >
              <FaFreeCodeCamp />
            </SocialIconsLink>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
