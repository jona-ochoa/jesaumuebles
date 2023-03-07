import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  overflow: hidden;
  @media screen and (max-width: 678px) {
    height: 800px;
  }

  .slide {
    position: relative;
    height: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition-duration: 1s aese;
  }
  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }

  .left-arrow {
    position: absolute;
    top: 50%;
    left: 32px;
    font-size: 3rem;
    color: #ff6961;
    z-index: 10;
    cursor: pointer;
    user-select: none;

    @media screen and (max-width: 678px) {
      right: 22px;
  }
    @media screen and (max-width: 480px) {
      left: 12px;
  }
  }
  .right-arrow {
    position: absolute;
    top: 50%;
    right: 32px;
    font-size: 3rem;
    color: #ff6961;
    z-index: 10;
    cursor: pointer;
    user-select: none;

    @media screen and (max-width: 678px) {
      right: 22px;
  }
    @media screen and (max-width: 480px) {
      right: 12px;
  }
  }
`;

export const Image = styled.img`
  width: 900px;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: 678px) {
    max-width: 400px;
    max-height: 600px;
  }
  @media screen and (max-width: 480px) {
    max-width: 300px;
    max-height: 500px;
  }
`;

export const Title = styled.h2`
  color: #ff6961;
  font-weight: 700;
  align-items: center;
  justify-content: center;
`


