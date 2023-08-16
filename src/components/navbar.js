import Link from 'next/link';
import React from "react";
import styles from './Navbar.module.css'; 

const Navbar = () => {
  return (
    <nav className={styles.Navbar}> 
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/interval">Interval</Link>
        </li>
        <li>
          <Link href="/scale">Scale</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;