import { Component } from 'react';
import { BoxStyled, ButtonStyled, TitleStyled } from './Feedback.styled';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleRate = event => {
    const {name} = event.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  }

  render() {
    const {good, neutral, bad} = this.state;

    return (
      <BoxStyled fDirection="column">
        <TitleStyled>Please leave feedback</TitleStyled>

        <BoxStyled width="300px">
          <ButtonStyled onClick={this.handleRate} name="good" bgColor="#aaf9aa">
            good
          </ButtonStyled>
          <ButtonStyled
            onClick={this.handleRate}
            name="neutral"
            bgColor="#fff6a6"
          >
            neutral
          </ButtonStyled>
          <ButtonStyled onClick={this.handleRate} name="bad" bgColor="#ffa7a6">
            bad
          </ButtonStyled>
        </BoxStyled>

        <BoxStyled fDirection="column">
          <TitleStyled>Statistics</TitleStyled>
          <BoxStyled as="ul" fDirection="column">
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
          </BoxStyled>
        </BoxStyled>
      </BoxStyled>
    );
  }
}