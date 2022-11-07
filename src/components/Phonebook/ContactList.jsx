import PropType from 'prop-types';
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

ContactList.defaultProps = {
  contacts: [],
  deleteUser: () => {},
};

ContactList.propTypes = {
  contacts: PropType.arrayOf(
    PropType.shape({
      id: PropType.string,
      name: PropType.string,
      number: PropType.string,
    })
  ),
  deleteUser: PropType.func,
};
