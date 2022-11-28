import { Title } from './Phonebook.styled';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { ContactForm } from './ContactForm';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from './redux/filterSlice';

export const Phonebook = () => {
  const [filterValue, setFilterValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setFilterValue(e.currentTarget.value);

    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <Title as="h1" fontSize="2">
        Phonebook
      </Title>
      <ContactForm />

      <Filter value={filterValue} onChange={handleChange} />

      <Title as="h2" fontSize="1.5">
        Contacts
      </Title>
      <ContactList />
    </>
  );
};
