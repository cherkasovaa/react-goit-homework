import { Component } from 'react';
import { Feedback } from 'components/Feedback/Feedback';
import { BoxStyled } from 'App.styled';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { ImageGalleryApp } from 'components/ImageGallery/ImageGalleryApp';
import { Navigation } from 'components/Navigation/Navigation';

export class App extends Component {
  state = {
    isFeedback: true,
    project: 'feedback',
  };

  KEY = 'project';

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
    localStorage.setItem(this.KEY, JSON.stringify(this.state.project));
  };

  showProject = id => {
    this.setState({ project: id });
  };

  normalizeName = value => {
    return value
      .split(' ')
      .map(el => el.toLowerCase())
      .join('');
  };

  getView = value => {
    switch (value) {
      case 'phonebook':
        return <Phonebook />;
      case 'feedback':
        return <Feedback />;
      case 'imagegalleryapp':
        return <ImageGalleryApp />;
      default:
        return '';
    }
  };

  render() {
    const btns = ['Phonebook', 'Feedback', 'Image Gallery App'];
    return (
      <>
        {<Navigation showProject={this.showProject} list={btns} />}
        <BoxStyled>{this.getView(this.state.project)}</BoxStyled>
      </>
    );
  }
}
