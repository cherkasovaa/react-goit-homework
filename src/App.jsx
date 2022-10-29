// import { Feedback } from 'components/Feedback/Feedback';
// import { BoxStyled, ButtonStyled } from 'App.styled';
// import { Phonebook } from 'components/Phonebook/Phonebook';
import { Component } from 'react';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/ImageGallery/Searchbar';
import { AppStyled } from 'components/ImageGallery/styles';
import './components/ImageGallery/styles.css';

export class App extends Component {
  onSearch = e => {
    console.log('search image:');
  };

  render() {
    return (
      <AppStyled>
        <Searchbar onSubmit={this.onSearch} />
        <ImageGallery />
      </AppStyled>
    );
  }
}
