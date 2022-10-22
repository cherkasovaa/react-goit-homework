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
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { name, number } = this.state;

    this.addNewContact(name, number);
    this.setState({ name: '', number: '' });
  };

  addNewContact = (name, number) => {
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
    const { name, number, filter, contacts } = this.state;
    const normalized = filter.toLowerCase();
    const renderFilters = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalized)
    );

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
        <form>
          <h3>Find contacts by name</h3>
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={this.handleChange}
          />
        </form>
        <ContactsListStyle>
          {renderFilters.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
            </li>
          ))}
        </ContactsListStyle>
      </>
    );
  }
}
