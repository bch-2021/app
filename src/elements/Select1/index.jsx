import PropTypes from 'prop-types';
import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import cl from './style.module.scss';

export default function Select1({ name, value, onChange, items }) {
  return (
    <FormControl variant="outlined" className={cl.container}>
      <InputLabel id="demo-simple-select-outlined-label">{name}</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={value}
        onChange={onChange}
        label={name}
      >
        {items.map((item, key) => (
          <MenuItem key={key} value={item.id}>{item.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

Select1.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  items: PropTypes.array.isRequired,
};

Select1.defaultProps = {
  onChange: () => {},
};
