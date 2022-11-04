// import { Feedback } from 'components/Feedback/Feedback';
// import { BoxStyled, ButtonStyled } from 'App.styled';
// import { Phonebook } from 'components/Phonebook/Phonebook';
import { Component } from 'react';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/ImageGallery/Searchbar';
import { AppStyled } from 'components/ImageGallery/styles';

export class App extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
  };

  onSearch = value => {
    console.log('search image:', value);
  };

  componentDidMount = () => {
    const API_KEY = '2cqmmjl9b_w_-koNZOfoDKCv9BREiEPanFNqgtp6lAI';
    const query = 'cat';
    const page = 2;
    const request = `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${query}&page=${page}`;
    fetch(request)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.results,
          });
        },
        error => {
          this.setState({ isLoaded: true, error });
        }
      );
  };

  render() {
    const { isLoaded, items } = this.state;
    return (
      <AppStyled>
        <Searchbar onSubmit={this.onSearch} />
        {isLoaded && <ImageGallery items={items} />}
      </AppStyled>
    );
  }
}
