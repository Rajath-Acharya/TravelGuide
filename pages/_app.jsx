import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import '../styles/utils/_global.scss';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default App;
