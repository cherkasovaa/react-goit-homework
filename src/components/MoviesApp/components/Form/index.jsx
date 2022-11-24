import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

export const Form = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    return onSubmit(value);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.SearchFormInput
        type="text"
        autoComplete="off"
        placeholder="Search movies"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <S.SearchButton type="submit">Search</S.SearchButton>
    </S.Form>
  );
};

Form.defaultProptypes = {
  onSubmit: () => {},
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
