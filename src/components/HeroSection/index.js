import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../Button";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src="https://player.vimeo.com/progressive_redirect/playback/743803142/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=8d4fdc83a4abf13b5370f14cba3497fe9aa7bb6637b22d2d78711d4dc949e4c4"
          type="video/mp4"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Te brindamos la mejor calidad en <span style={{color:"#ff6961"}}>muebles y colchones</span> a un buen precio y con envios gratis.</HeroH1>
        <HeroP>Presiona para mas información detallada de nuestras ventas en línea, ofrecemos armados y envios</HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            big={true}
            fontBig={true}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Nosotros {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
