import React from 'react';
import PropTypes, { shape } from 'prop-types';
import { Button } from '@mui/material';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        const handleDeleteContact = () => {
          onDelete(contact);
        };
        return (
          <li key={id}>
            {name} {number}
            <Button type="button" onClick={handleDeleteContact}>
              Delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(shape),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
