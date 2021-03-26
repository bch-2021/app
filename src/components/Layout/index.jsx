import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <Container maxWidth="lg">
      <Header />
      {children}
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
