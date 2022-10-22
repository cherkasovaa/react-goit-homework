import { ContactsListStyle } from './Phonebook.styled';

export const ContactList = ({ contacts }) => {
  return (
    <ContactsListStyle>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
        </li>
      ))}
    </ContactsListStyle>
  );
};
