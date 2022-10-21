import { Component } from 'react';
import { BoxStyled } from './Feedback.styled';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttons = [
    { name: 'good', bgColor: '#aaf9aa' },
    { name: 'neutral', bgColor: '#fff6a6' },
    { name: 'bad', bgColor: '#ffa7a6' },
  ];

  handleRate = event => {
    const { name } = event.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, cur) => acc + cur, 0);

  countPositiveFeedbackPercentage = () =>
    (this.state.good / this.countTotalFeedback()) * 100 || 0;

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <BoxStyled fDirection="column">
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={this.buttons}
              onLeaveFeedback={this.handleRate}
            />
          }
        />

        <Section
          title="Statistics"
          children={
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          }
        />
      </BoxStyled>
    );
  }
}
