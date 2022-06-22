import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const Filter = ({ value, onChange }) => {
  return (
    <TextField
      size="small"
      autoComplete="off"
      type="text"
      name="filter"
      label="Find contacts by name"
      value={value}
      onChange={onChange}
    />
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
