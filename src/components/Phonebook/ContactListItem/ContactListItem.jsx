import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

const ContactListItem = ({ contact, onDelete }) => {
  const { name, number } = contact;

  return (
    <li>
      {name} {number}
      <Button type="button" onClick={() => onDelete(contact)}>
        Delete
      </Button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
