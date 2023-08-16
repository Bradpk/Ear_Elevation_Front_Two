import styles from '../styles/global.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return <div className={styles.myGlobalStyles}><Component {...pageProps} /></div>;
}

export default MyApp;