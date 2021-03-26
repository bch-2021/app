import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import cl from './style.module.scss';

export default function Input({ name }) {
  return (
    <TextField label={name} variant="outlined" className={`${cl.container} ${cl.styled}`} />
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
};

// Button1.defaultProps = {
//   type: 'contained',
//   onClick: () => {},
// };
