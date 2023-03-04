import React from "react";
import Icon1 from "../../images/svg1.svg";
import Icon2 from "../../images/svg2.svg";
import Icon3 from "../../images/svg3.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Mis Trabajos con otras herramientas</ServicesH1>
      <ServicesWrapper>

        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Aplicación de tareas</ServicesH2>
          <ServicesP>
            Página web donde se puede añadir, editar y eliminar una tarea.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Aplicación de Registro y login</ServicesH2>
          <ServicesP>App para permitir crear usuarios e ingresar a la plataforma</ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>BENEFICIOS</ServicesH2>
          <ServicesP>
            Potenciar más las ventas para su empresa o negocio.
          </ServicesP>
        </ServicesCard>
        
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;