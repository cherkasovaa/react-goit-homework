import { ContactsListStyle } from './Phonebook.styled';

export const ContactList = ({ contacts, deleteUser }) => {
  return (
    <ContactsListStyle>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            name={id}
            onClick={() => deleteUser(id)}
            style={{ marginLeft: '13px' }}
          >
            delete
          </button>
        </li>
      ))}
    </ContactsListStyle>
  );
};
