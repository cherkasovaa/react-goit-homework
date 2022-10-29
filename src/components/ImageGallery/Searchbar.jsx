import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  WrapperStyled,
  SearchFormStyled,
  SearchFormButtonStyled,
  SearchFormInputStyled,
  SearchFormButtonLabelStyled,
} from './styles';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = e => {
    this.setState({ search: e.currentTarget.value });
  };

  handleSearch = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
  };

  render() {
    const { search } = this.state;

    return (
      <WrapperStyled>
        <SearchFormStyled>
          <SearchFormButtonStyled type="submit" onClick={this.handleSearch}>
            <SearchFormButtonLabelStyled>Search</SearchFormButtonLabelStyled>
          </SearchFormButtonStyled>

          <SearchFormInputStyled
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={search}
            onChange={this.handleChange}
          />
        </SearchFormStyled>
      </WrapperStyled>
    );
  }
}

Searchbar.defaultProps = {
  onSubmit: () => null,
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
