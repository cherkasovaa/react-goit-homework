import { useSelector } from 'react-redux';
import { getContacts, getFilterContacts } from '../redux/selectors';

export const useVisibleContacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterContacts);

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
