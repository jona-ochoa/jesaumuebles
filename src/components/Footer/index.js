import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
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
              <FooterLinkTitle to="/">Servicios</FooterLinkTitle>
              <FooterLink to="/signin">Muebles</FooterLink>
              <FooterLink to="/signin">Colchones</FooterLink>
              <FooterLink to="/signin">Sillas Gamer</FooterLink>
              <FooterLink to="/signin">Electros</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Marcas</FooterLinkTitle>
              <FooterLink to="/signin">Muebles Orlandi</FooterLink>
              <FooterLink to="/signin">ColchonesMaximo</FooterLink>
              <FooterLink to="/signin">Colchones Gani</FooterLink>
              <FooterLink to="/signin">Estant Muebles</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Contacto</FooterLinkTitle>
              <FooterLink to="/signin">Telefono: +54-3525-619061</FooterLink>

              <FooterLink to="/signin">
                Email: jesaumuebles@gmail.com
              </FooterLink>

              <FooterLink to="/signin">
                Soporte: soporte.jesau@gmail.com
              </FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              JesauMuebles
            </SocialLogo>
            <WebsiteRight>
              © {new Date().getFullYear()} JesauMuebles
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
              href="https://wa.me/543525619061?text=Hola%20Jonacode"
              target="_blank"
              aria-label="Whatsapp"
            >
              <FaWhatsapp />
            </SocialIconsLink>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
