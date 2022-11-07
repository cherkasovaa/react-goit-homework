import PropTypes from 'prop-types';
import { ButtonStyle, FormStyled, InputSyled } from './Phonebook.styled';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onChange }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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
    addNewContact(name, number);
    reset();
  };

  const addNewContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    onChange(contact);
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

ContactForm.defaultProps = {
  onChange: () => {},
};

ContactForm.propTypes = {
  onChange: PropTypes.func,
};
