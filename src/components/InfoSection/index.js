import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  ColumnOne,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ColumnTwo,
  ImgWrap,
  Img,
} from "./InfoElements";
import { Button } from "../Button";

const InfoSection = ({
  id,
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  start,
  buttonLabel,
  img,
  alt,
  lightTextTop,
  primary,
  dark, 
  dark2,
}) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <ColumnOne>
            <TextWrapper>
              <TopLine lightTextTop={lightTextTop}>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrap>
                <Button
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                >
                  {buttonLabel}
                </Button>
              </BtnWrap>
            </TextWrapper>
          </ColumnOne>
          <ColumnTwo>
            <ImgWrap start={start}>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </ColumnTwo>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
