import { Component } from 'react';
import { Title } from './Phonebook.styled';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { ContactForm } from './ContactForm';

export class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  KEY = 'contacts';

  componentDidMount = () => {
    const parseLocalData = JSON.parse(localStorage.getItem(this.KEY)) || [];
    this.setState({ contacts: parseLocalData });
  };

  componentDidUpdate = () => {
    localStorage.setItem(this.KEY, JSON.stringify(this.state.contacts));
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
