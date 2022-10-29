import PropTypes from 'prop-types';
import {
  WrapperStyled,
  SearchFormStyled,
  SearchFormButtonStyled,
  SearchFormInputStyled,
  SearchFormButtonLabelStyled,
} from './styles';

export const Searchbar = ({ onSubmit }) => {
  return (
    <WrapperStyled>
      <SearchFormStyled>
        <SearchFormButtonStyled type="submit" onClick={onSubmit}>
          <SearchFormButtonLabelStyled>Search</SearchFormButtonLabelStyled>
        </SearchFormButtonStyled>

        <SearchFormInputStyled
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
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
