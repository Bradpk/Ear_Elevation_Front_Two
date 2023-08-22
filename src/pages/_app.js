import styles from '../styles/global.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStateProvider } from '../context/GlobalState';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Function to retrieve user data from local storage
    const getUserFromLocalStorage = () => {
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = jwtDecode(userData);
        console.log('User data:', user);
        /* dispatch to setGlobalState to user */
        /* if state.user.user_id != null then we know a user is logged in */
      }
    };
    getUserFromLocalStorage();
  }, []);
  return (
    <GlobalStateProvider>
      <div className={styles.myGlobalStyles}><Component {...pageProps} /></div>
    </GlobalStateProvider>
  );
  return ;
}
export default MyApp;