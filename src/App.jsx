// import { Feedback } from 'components/Feedback/Feedback';
// import { BoxStyled, ButtonStyled } from 'App.styled';
// import { Phonebook } from 'components/Phonebook/Phonebook';
import { Component } from 'react';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/ImageGallery/Searchbar';
import { AppStyled } from 'components/ImageGallery/styles';
import { Button } from 'components/ImageGallery/Button';
import { Loader } from 'components/ImageGallery/Loader';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    isLoading: false,
    error: null,
    items: [],
  };

  onSearch = async value => {
    await this.setState({ isLoading: true, query: value });
    const data = await this.getMaterials();
    this.setState({ isLoading: false, items: data.results });
  };

  getMaterials = async () => {
    const request = this.createRequest();
    let response = await fetch(request);
    let data = await response.json();
    return data;
  };

  createRequest = () => {
    const { query, page } = this.state;

    const API_KEY = '2cqmmjl9b_w_-koNZOfoDKCv9BREiEPanFNqgtp6lAI';
    return `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${query}&page=${page}`;
  };

  addImages = async e => {
    e.preventDefault();
    await this.setState(prevState => ({
      page: prevState.page + 1,
      isLoading: true,
    }));

    const images = await this.getMaterials();
    this.setState(prevState => ({
      items: [...prevState.items, ...images.results],
      isLoading: false,
    }));
  };

  render() {
    const { items, isLoading } = this.state;
    return (
      <AppStyled>
        <Searchbar onSubmit={this.onSearch} />
        {<ImageGallery items={items} />}
        {isLoading && <Loader />}
        {items.length > 0 && !isLoading && <Button onClick={this.addImages} />}
      </AppStyled>
    );
  }
}
