import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import {
  ButtonStyle,
  ContactsListStyle,
  FormStyled,
  InputSyled,
} from './Phonebook.styled';

const initialValues = {
  name: '',
  number: '',
};

export class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = (values, actions) => {
    const { name, number } = this.state;

    this.onAdd(name, number);
    this.setState({ name: '', number: '' });
  };

  onAdd = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    const { name, number, contacts } = this.state;

    return (
      <>
        <h1>Phonebook</h1>
        <Formik initialValues={initialValues} onSubmit={this.handleSubmit}>
          <FormStyled>
            <label>Name</label>
            <InputSyled
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleChange}
            />

            <label>Number</label>
            <InputSyled
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleChange}
            />

            <ButtonStyle type="submit">Add contact</ButtonStyle>
          </FormStyled>
        </Formik>

        <h2>Contacts</h2>
        <ContactsListStyle>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
            </li>
          ))}
        </ContactsListStyle>
      </>
    );
  }
}
