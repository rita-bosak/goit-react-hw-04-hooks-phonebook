import React from 'react';
import PropTypes, { shape } from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(shape),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
