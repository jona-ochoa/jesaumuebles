import React from "react";
import { Card } from "./Card";
import {
  ServicesContainer,
  ServicesH1,
  CardContainer,
  Separator
} from "./ServicesElements";
import img1 from "../../images/rorl.jfif";
import img3 from "../../images/mmax.jfif";
import img2 from "../../images/spic.jfif";


const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>TODOS LOS SERVICIOS</ServicesH1>
      <CardContainer>
        <Card title={"Muebles Orlandi"} disponible={1} imgUrl={img1} />
        <Separator />
        <Card title={"Muebles Maximo"} disponible={2} imgUrl={img3} />
        <Separator />
        <Card title={"Colchones Maxiking"} disponible={1} imgUrl={img2} />
      </CardContainer>
    </ServicesContainer>
  );
};

export default Services;