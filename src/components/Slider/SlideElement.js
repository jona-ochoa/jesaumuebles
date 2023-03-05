import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;

  .slide {
    position: relative;
    height: 100vh;
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
  }
`;

export const Image = styled.img`
  width: 900px;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
`;
