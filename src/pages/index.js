import Link from "next/link";
import Navbar from "../components/navbar";
import Image from "next/image";
import styles from '../styles/home.module.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGlobalState } from '../context/GlobalState';
import jwtDecode from 'jwt-decode';
import React, { useState, useEffect } from 'react'

export default function Page() {
  const {state, dispatch} = useGlobalState();
  useEffect(() => {
    const getUserFromLocalStorage = () => {
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = jwtDecode(userData);
        console.log('User data:', user);
        dispatch({
            type: 'SET_USER',
            payload: user
        });
      }
    };
    getUserFromLocalStorage();
  }, []);
  return (
    <div className={styles.all}>
       <Navbar/>
    <div className={styles.container}>
      <Image
        src="/ee.jpeg"
        alt="Logo"
        width={600}
        height={400}
        className={styles.image}
      />
    </div>
    </div>
  );
}