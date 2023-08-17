import Link from 'next/link';
import React from "react";
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
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
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/profile">
            <FontAwesomeIcon icon={faUser} style={{ color: "#feffff" }} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;