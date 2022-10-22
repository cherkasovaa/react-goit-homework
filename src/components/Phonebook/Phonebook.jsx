import { Component } from 'react';
import { Title } from './Phonebook.styled';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { ContactForm } from './ContactForm';

export class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  renderFilter = contact => {
    this.state.contacts.find(el => el.name === contact.name)
      ? this.showAlert(contact.name)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, contact],
        }));
  };

  showAlert = name => {
    alert(`${name} is already in contacts`);
  };

  deleteUser = idx => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idx),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const normalized = filter.toLowerCase();
    const renderContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalized)
    );

    return (
      <>
        <Title as="h1" fontSize="2">
          Phonebook
        </Title>
        <ContactForm onChange={this.renderFilter} />

        <Filter value={filter} onChange={this.handleChange} />

        <Title as="h2" fontSize="1.5">
          Contacts
        </Title>
        <ContactList contacts={renderContacts} deleteUser={this.deleteUser} />
      </>
    );
  }
}
