import { Title } from './Phonebook.styled';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { ContactForm } from './ContactForm';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './redux/filterSlice';
import { getError, getIsLoading } from './redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from './redux/operations';

export const Phonebook = () => {
  const [filterValue, setFilterValue] = useState('');
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const handleChange = e => {
    setFilterValue(e.currentTarget.value);

    dispatch(setFilter(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
      {isLoading && !error && <b>Please, wait...</b>}
      <ContactList />
    </>
  );
};
