import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  FormWrap,
  Icon,
  Form,
  FormInput,
  FormLabel,
  FormTextArea,
} from "./SigninElements";

const SignIn = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v2jkpzd",
        "template_hyq7qnu",
        form.current,
        "user_5V6opzYjVP4uZ3d75G7zL"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Gracias por enviar tu consulta.");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
      <FormWrap>
        <Icon to="/">jesauMuebles</Icon>
        <Form ref={form} onSubmit={sendEmail}>
          <FormLabel>Nombre</FormLabel>
          <FormInput type="text" name="user_name" />
          <FormLabel>Email</FormLabel>
          <FormInput type="email" name="user_email" />
          <FormLabel>Mensaje</FormLabel>
          <FormTextArea name="message" required rows={4} />
          <FormInput type="file" name="user_file" aria-label="Archivo" />
          <FormInput type="submit" value="Enviar Mensaje" />
        </Form>
      </FormWrap>
    </Container>
  );
};

export default SignIn;
