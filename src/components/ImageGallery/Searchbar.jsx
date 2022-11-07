import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  WrapperStyled,
  SearchFormStyled,
  SearchFormButtonStyled,
  SearchFormInputStyled,
  SearchFormButtonLabelStyled,
} from './styles';

export const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = e => setSearch(e.currentTarget.value);
  const handleSearch = e => {
    e.preventDefault();
    onSubmit(search);
  };
  return (
    <WrapperStyled>
      <SearchFormStyled>
        <SearchFormButtonStyled type="submit" onClick={handleSearch}>
          <SearchFormButtonLabelStyled>Search</SearchFormButtonLabelStyled>
        </SearchFormButtonStyled>

        <SearchFormInputStyled
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={search}
          onChange={handleChange}
        />
      </SearchFormStyled>
    </WrapperStyled>
  );
};

Searchbar.defaultProps = {
  onSubmit: () => null,
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
