import { BoxStyled, ButtonStyled } from './Feedback.styled';
import PropTypes from 'prop-types';

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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onLeaveFeedback: PropTypes.func,
};
