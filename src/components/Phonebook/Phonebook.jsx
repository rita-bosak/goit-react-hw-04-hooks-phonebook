import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container } from '@mui/material';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import useLocalStorage from '../../hooks/useLocalStorage';

const Phonebook = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const formSubmitHandler = newContact => {
    const newStateContact = { id: uuidv4(), ...newContact };

    const existingContact = contacts.find(
      contact => contact.name === newContact.name
    );

    if (existingContact) {
      return alert('This contact already exists');
    }

    setContacts(state => [...state, newStateContact]);
  };

  const deleteContactHandler = contactToDelete => {
    setContacts(state => {
      const updatedContacts = state.filter(
        contact => contact !== contactToDelete
      );

      return [...updatedContacts];
    });
  };

  const filterHandler = e => {
    setFilter(e.currentTarget.value);
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterHandler} />
      <ContactList
        contacts={filteredContacts}
        onDelete={deleteContactHandler}
      />
    </Container>
  );
};

export default Phonebook;
