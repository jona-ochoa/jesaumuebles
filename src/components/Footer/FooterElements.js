import styled from "styled-components";
// import { Link } from "react-router-dom";
import { Link as LinkR } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #333;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
font-size: 14px;
margin-bottom:16px;
color: #ff6961;
cursor: pointer;
&:hover{
    color:#fff;
    transition: 0.3s ease-out;
}
`;

export const FooterLink = styled(LinkR)`
color:#fff;
text-decoration:none;
margin-bottom:0.5rem;
cursor: pointer;
font-size: 14px;
&:hover{
    color:#ff6961;
    transition: 0.3s ease-out;
}
`;

export const SocialMedia = styled.section`
max-width: 1000px;
width:100%;
`

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto;
text-align: center;
@media screen and (max-width: 620px) {
   flex-direction: column-reverse;
   justify-content: center;
  }
`

export const SocialLogo = styled(LinkR)`
color:#ff6961;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
font-weight: bold;
text-decoration:none;
`

export const WebsiteRight = styled.small`
color: #fff;
`

export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`

export const SocialIconsLink = styled.a`
color:#fff;
font-size: 24px;
&:hover {
	color: #ff6961;
	transition:0.3s ease-out;
}
@media screen and (max-width: 820px) {
  padding-top: 32px;
  }
`