import { useState } from 'react';
import { BoxStyled } from './Feedback.styled';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
import { Section } from './Section';
import { Statistics } from './Statistics';

export const Feedback = () => {
  const buttons = [
    { name: 'good', bgColor: '#aaf9aa' },
    { name: 'neutral', bgColor: '#fff6a6' },
    { name: 'bad', bgColor: '#ffa7a6' },
  ];

  const [goodMark, setGoodMark] = useState(0);
  const [neutralMark, setNeutralMark] = useState(0);
  const [badMark, setBadMark] = useState(0);

  const handleRate = event => {
    const { name } = event.target;

    switch (name) {
      case 'goodMark':
        setGoodMark(goodMark + 1);
        break;
      case 'neutralMark':
        setNeutralMark(neutralMark + 1);
        break;
      case 'badMark':
        setBadMark(badMark + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () =>
    [goodMark, neutralMark, badMark].reduce((acc, cur) => acc + cur, 0);

  const countPositiveFeedbackPercentage = () =>
    (goodMark / countTotalFeedback()) * 100 || 0;

  return (
    <BoxStyled fDirection="column" maxWidth="400px">
      <Section
        children={
          <FeedbackOptions options={buttons} onLeaveFeedback={handleRate} />
        }
      />
      <Section
        title="Statistics"
        children={
          countTotalFeedback() === 0 ? (
            <Notification />
          ) : (
            <Statistics
              good={goodMark}
              neutral={neutralMark}
              bad={badMark}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )
        }
      />
    </BoxStyled>
  );
};
