import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import cl from './style.module.scss';

export default function Button1({ name, onClick }) {
  return (
    <Button
      className={`${cl.container} ${cl.styled}`}
      variant="contained"
      onClick={onClick}
    >
      {name}
    </Button>
  );
}

Button1.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button1.defaultProps = {
  onClick: () => {},
};
