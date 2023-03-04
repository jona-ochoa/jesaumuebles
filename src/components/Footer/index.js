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
              <FooterLink to='/signin'>Sitios y Plataformas web</FooterLink>
              <FooterLink to='/signin'>UX / UI</FooterLink>
              <FooterLink to='/signin'>Posicionamiento web</FooterLink>
              <FooterLink to='/signin'>Mobile & Web Apps</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Contacto</FooterLinkTitle>
              <FooterLink to='/signin'>Telefono :</FooterLink>
              <FooterLink to='/signin'>+54-3525-619061</FooterLink>
              <FooterLink to='/signin'>Email : </FooterLink>
              <FooterLink to='/signin'>jonatan.c.ochoa@gmail.com</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Redes Sociales</FooterLinkTitle>
              <FooterLink to='/signin'>FAcebook</FooterLink>
              <FooterLink to='/signin'>Intagram</FooterLink>
              <FooterLink to='/signin'>Github</FooterLink>
              <FooterLink to='/signin'>Linkedin</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Contacto</FooterLinkTitle>
              <FooterLink to='/signin'>Telefono :</FooterLink>
              <FooterLink to='/signin'>+54-3525-619061</FooterLink>
              <FooterLink to='/signin'>Email : </FooterLink>
              <FooterLink to='/signin'>jonatan.c.ochoa@gmail.com</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              jesauboStore
            </SocialLogo>
            <WebsiteRight>
              © {new Date().getFullYear()} jesauboStore
            </WebsiteRight>

            <SocialIconsLink
              href="mailto:jonatan.c.ochoa@gmail.com"
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
