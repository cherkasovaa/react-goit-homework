import { TitleStyled } from './Feedback.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <TitleStyled>{title}</TitleStyled>
      {children}
    </>
  );
};
