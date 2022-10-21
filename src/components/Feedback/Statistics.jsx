const { BoxStyled } = require('./Feedback.styled');

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <BoxStyled as="ul" fDirection="column">
    <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {total()}</li>
    <li>Positive feedback: {Math.round(positivePercentage())}%</li>
  </BoxStyled>
);
