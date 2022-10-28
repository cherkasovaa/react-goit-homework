import { Feedback } from 'components/Feedback/Feedback';
import { BoxStyled, ButtonStyled } from 'App.styled';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { Component } from 'react';

export class App extends Component {
  state = {
    isFeedback: true,
  };

  KEY = 'isFeedback';

  componentDidMount = () => {
    const isLocalData = localStorage.getItem(this.KEY);
    const parseData = JSON.parse(isLocalData);

    if (parseData !== null) {
      this.setState({
        [this.KEY]: parseData,
      });
    }
  };

  componentDidUpdate = prevState => {
    localStorage.setItem(this.KEY, JSON.stringify(this.state.isFeedback));
  };

  showProject = () => this.setState({ isFeedback: !this.state.isFeedback });

  render() {
    return (
      <BoxStyled>
        <ButtonStyled onClick={this.showProject}>
          {this.state.isFeedback ? 'Phonebook' : 'Feedback'}{' '}
        </ButtonStyled>
        {this.state.isFeedback ? <Feedback /> : <Phonebook />}
      </BoxStyled>
    );
  }
}
