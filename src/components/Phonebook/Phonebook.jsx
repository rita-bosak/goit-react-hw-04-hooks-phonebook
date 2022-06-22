import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container } from '@mui/material';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default class Phonebook extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = newContact => {
    const newStateContact = { id: uuidv4(), ...newContact };

    for (const contact of this.state.contacts) {
      if (contact.name === newContact.name) {
        return alert('This contact already exists');
      }
    }
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newStateContact] };
    });
  };

  deleteContactHandler = contactToDelete => {
    this.setState(prevState => {
      const contactIndex = prevState.contacts.indexOf(contactToDelete);
      prevState.contacts.splice(contactIndex, 1);
      return { contacts: [...prevState.contacts] };
    });
  };

  filterHandler = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.filterHandler} />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.deleteContactHandler}
        />
      </Container>
    );
  }
}
