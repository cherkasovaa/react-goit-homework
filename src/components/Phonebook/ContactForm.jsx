import { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle, FormStyled, InputSyled } from './Phonebook.styled';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';

const initialValues = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
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

    this.props.onChange(contact);
  };

  render() {
    const { name, number } = this.state;

    return (
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
    );
  }
}

ContactForm.propTypes = {
  onChange: PropTypes.func,
};
