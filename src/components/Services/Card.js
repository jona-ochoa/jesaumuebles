import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextBody,
  CardStatWrapper,
  CardStats,
  LinkText,
} from "./CardElements";

export const Card = ({ title, disponible, imgUrl }) => {
  return (
      <CardWrapper>
        <CardImage background={imgUrl} />
        <CardTextWrapper>
          <CardTextDate>{disponible} Disponible</CardTextDate>
          <CardTextTitle>{title}</CardTextTitle>
          <CardTextBody>
            La mejor calidad del mercado
          </CardTextBody>
        </CardTextWrapper>
        <CardStatWrapper>
        <CardStats>
            <LinkText href="#">Pagina Oficial</LinkText>
          </CardStats>
          <CardStats>
            <LinkText href="#">email</LinkText>
          </CardStats>
        </CardStatWrapper>
      </CardWrapper>
  );
};
