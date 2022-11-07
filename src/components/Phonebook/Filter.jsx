import PropTypes from 'prop-types';

import { FilterStyled, Title } from './Phonebook.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <Title>Find contacts by name</Title>
      <FilterStyled
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

Filter.defaultProps = {
  value: '',
  onChange: () => {},
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
