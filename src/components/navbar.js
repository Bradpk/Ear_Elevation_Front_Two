import Link from 'next/link';
import React, { useState } from "react";
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import AuthService from '../services/auth.service';
import { useGlobalState } from '../context/GlobalState';

const Navbar = () => {
  const router = useRouter();
  const { state, dispatch } = useGlobalState();
  const [collapsed, setCollapsed] = useState(true);

  const handleLogout = () => {
    AuthService.logout();
    dispatch({ type: 'LOGOUT_USER' });
    router.push('/');
  };

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className={`navbar navbar-expand-lg ${styles.Navbar}`}>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`}>
        <ul className="navbar-nav d-flex justify-content-between align-items-center w-100">
          <li className="nav-item">
            <Link href="/">
              <FontAwesomeIcon icon={faHome} style={{ color: "#feffff" }} />
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/interval">Intervals</Link>
          </li>
          <li className="nav-item">
            <Link href="/scale">Scales</Link>
          </li>
          <li className="nav-item">
            <Link href="/arpeggio">Arpeggios</Link>
          </li>
          <li className="nav-item">
            <Link href="/theory">Theory</Link>
          </li>
          <li className="nav-item">
            <Link href="/about">About</Link>
          </li>
          {state.user ? (
            <li className="nav-item">
              <Link href="/" className={styles.logout} onClick={handleLogout}>Logout</Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link href="/login">Login</Link>
            </li>
          )}
          {state.user ? (
            <li className="nav-item">
              <Link href="/profile">
                <FontAwesomeIcon icon={faUser} style={{ color: "#feffff" }} />
              </Link>
            </li>
          ) : null}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;