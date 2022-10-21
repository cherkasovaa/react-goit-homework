import { BoxStyled, ButtonStyled } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BoxStyled width="300px">
      {options.map(({ name, bgColor }) => (
        <ButtonStyled
          key={name}
          onClick={onLeaveFeedback}
          name={name}
          bgColor={bgColor}
        >
          {name}
        </ButtonStyled>
      ))}
    </BoxStyled>
  );
};
