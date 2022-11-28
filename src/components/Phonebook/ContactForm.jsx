import { ButtonStyle, FormStyled, InputSyled } from './Phonebook.styled';
import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from './redux/contactsSlice';
import { getContacts } from './redux/selectors';

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const showAlert = name => alert(`${name} is already in contacts`);

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    contacts.some(contact => contact.name.includes(name))
      ? showAlert(name)
      : dispatch(addContact(name, number));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormStyled>
        <label>Name</label>
        <InputSyled
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />

        <label>Number</label>
        <InputSyled
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
        <ButtonStyle type="submit">Add contact</ButtonStyle>
      </FormStyled>
    </Formik>
  );
};
