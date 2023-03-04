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
        <HeroH1>Muebles para el Hogar</HeroH1>
        <HeroP>Presiona para inscribirte y comprar en linea</HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            primary={true}
            big={true}
            dark={true}
            fontBig={true}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
