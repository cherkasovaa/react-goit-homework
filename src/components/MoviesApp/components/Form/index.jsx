import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './styles';

export const Form = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: value });
    setValue('');
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
