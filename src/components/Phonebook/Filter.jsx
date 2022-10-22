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
