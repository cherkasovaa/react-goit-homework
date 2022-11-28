import { useDispatch } from 'react-redux';
import { useVisibleContacts } from './hooks/useVisibleContacts';
import { ContactsListStyle } from './Phonebook.styled';
import { deleteContact } from './redux/actions';

export const ContactList = () => {
  const contacts = useVisibleContacts();
  const dispatch = useDispatch();

  const handleDelete = e => dispatch(deleteContact(e.target.id));

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
          <button id={id} onClick={handleDelete}>
            delete
          </button>
        </li>
      ))}
    </ContactsListStyle>
  );
};
