import { Feedback } from 'components/Feedback/Feedback';
import { BoxStyled } from 'App.styled';
import { Phonebook } from 'components/Phonebook/Phonebook';

export const App = () => {
  return (
    <BoxStyled>
      <Feedback />
      <Phonebook />
    </BoxStyled>
  );
};
