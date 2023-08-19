import Link from 'next/link';
import React from "react";
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import AuthService from '../services/auth.service';
import { useGlobalState } from '../context/GlobalState';



const Navbar = () => {
  const router = useRouter();
  const { state, dispatch } = useGlobalState();

  const handleLogout = () => {
    AuthService.logout();
    dispatch({ type: 'LOGOUT_USER' });
    router.push('/');
  };

  return (
    <nav className={styles.Navbar}>
      <ul>
        <li>
          <Link href="/">
            <FontAwesomeIcon icon={faHome} style={{ color: "#feffff" }} />
          </Link>
        </li>
        <li>
          <Link href="/interval">Interval</Link>
        </li>
        <li>
          <Link href="/scale">Scale</Link>
        </li>
        <li>
          <Link href="/arpeggio">Arpeggio</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        {state.user ? (
          <li>
            <Link href="/" className={styles.logout} onClick={handleLogout}>Logout</Link>
          </li>
        ) : (
          <li>
            <Link href="/login">Login</Link>
          </li>
        )}
    
  {state.user ? (
    <Link href="/profile">
      <FontAwesomeIcon icon={faUser} style={{ color: "#feffff" }} />
    </Link>
  ) : null}

      </ul>
    </nav>
  );
};

export default Navbar;