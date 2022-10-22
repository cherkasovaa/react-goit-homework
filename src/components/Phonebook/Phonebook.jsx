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
};

export class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleSubmit = (values, actions) => {
    this.onAdd(this.state.name);
    this.setState({ name: '' });
  };

  onAdd = name => {
    const contact = {
      id: nanoid(),
      name,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    const { name, contacts } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <Formik initialValues={initialValues} onSubmit={this.handleSubmit}>
          <FormStyled>
            <label htmlFor="name">Name</label>
            <InputSyled
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleChange}
            />

            <ButtonStyle type="submit">Add contact</ButtonStyle>
          </FormStyled>
        </Formik>

        <h2>Contacts</h2>
        <ContactsListStyle>
          {contacts.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ContactsListStyle>
      </>
    );
  }
}
