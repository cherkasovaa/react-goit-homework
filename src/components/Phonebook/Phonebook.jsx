import { Title } from './Phonebook.styled';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { ContactForm } from './ContactForm';
import { useState } from 'react';

export const Phonebook = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'contacts':
        setContacts(contacts.push(value));
        break;
      case 'filter':
        setFilter(value);
        break;
      default:
        break;
    }
  };

  const renderFilter = contact => {
    contacts.find(el => el.name === contact.name)
      ? showAlert(contact.name)
      : setContacts(prevState => [...prevState, contact]);
  };

  const showAlert = name => alert(`${name} is already in contacts`);

  const deleteUser = idx => {
    setContacts(contacts.filter(contact => contact.id !== idx));
  };

  const normalized = filter.toLowerCase();

  const renderContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalized)
  );

  return (
    <>
      <Title as="h1" fontSize="2">
        Phonebook
      </Title>
      <ContactForm onChange={renderFilter} />

      <Filter value={filter} onChange={handleChange} />

      <Title as="h2" fontSize="1.5">
        Contacts
      </Title>
      <ContactList contacts={renderContacts} deleteUser={deleteUser} />
    </>
  );
};
