import { ButtonStyled } from './styles';

export const Button = ({ onClick }) => {
  return (
    <ButtonStyled type="button" onClick={onClick}>
      Load more
    </ButtonStyled>
  );
};
