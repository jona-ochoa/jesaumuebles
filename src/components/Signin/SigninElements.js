import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 865px;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  z-index: 0;
  overflow: hidden;
  background: #ff6961;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 16px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #77e;
  height: 600px;
  height: auto;
  width: 800px;
  z-index: 1;
  display: grid;
  margin: auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 30px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 980px) {
    max-width: 650px;
    padding: 70px 30px;
  }

  @media screen and (max-width: 780px) {
    max-width: 400px;
    padding: 60px 28px;
  }
  @media screen and (max-width: 480px) {
    max-width: 300px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #000;
  font-size: 20px;
  font-weight: 800;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #000;
  font-weight: 700;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  outline: none;
  font-weight: 500;
`;

export const FormTextArea = styled.textarea`
  background: white;
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 4px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.76);
  outline: none;
`;

export const FormButton = styled.button`
  background: #ff6961;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
