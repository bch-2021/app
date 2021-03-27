import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import cl from './style.module.scss';

export default function Input({ name, value, onChange }) {
  return (
    <TextField
      label={name}
      variant="outlined"
      value={value}
      onChange={onChange}
      className={`${cl.container} ${cl.styled}`}
    />
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
