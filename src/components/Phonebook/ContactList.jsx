import PropTypes from 'prop-types';
import { ContactsListStyle } from './Phonebook.styled';

export const ContactList = ({ contacts, deleteUser }) => {
  return (
    <ContactsListStyle>
      {contacts.map(({ id, name, number }) => (
        <li
          key={id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {name}: {number}
          <button name={id} onClick={() => deleteUser(id)}>
            delete
          </button>
        </li>
      ))}
    </ContactsListStyle>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  deleteUser: PropTypes.func,
};
