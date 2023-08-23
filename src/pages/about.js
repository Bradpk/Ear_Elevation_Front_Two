import Link from "next/link";
import Navbar from "../components/navbar";
import styles from '../styles/about.module.css';
import { useGlobalState } from '../context/GlobalState';
import React, { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode';

export default function About() {
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
        <div>
            <Navbar />
            <div className={styles.container}>
                <p>
                    Ear Elevation offers a set of exercises tailored to musicians, aiming to enhance their auditory recognition skills. By mastering the identification of intervals, scales, and arpeggios, individuals can map these skills onto their instrument and with enough practive, develop the ability to play by ear.</p>

                <p>Account creation allows users to log their exercise outcomes, complete with timestamps, thus facilitating a visual journey of their enhancements over time.
                </p>
                <p>
                    This platform primarily caters to individuals possessing a foundational understanding of music theory. For those initially finding these exercises challenging, a good starting point involves associating specific intervals with iconic melodies.
                </p>
                <p>
                    Here's a list of intervals matched with corresponding melodies to get you started:
                </p>
                <ul className={styles.list}>

                    <li> interval: 'm2', song: 'Jaws Theme Song'</li>
                    <li>interval: 'M2', song: 'Happy Birthday'</li>
                    <li>interval: 'm3', song: 'Greensleeves' </li>
                    <li>interval: 'M3', song: 'When The Saints'</li>
                    <li> interval: 'P4', song: 'Here Comes The Bridge'</li>
                    <li> interval: 'D5', song: 'Simpsons Theme Song' </li>
                    <li> interval: 'P5', song: 'Star Wars' </li>
                    <li>interval: 'm6', song: 'The Entertainer'</li>
                    <li>interval: 'M6', song: 'My Bonnie Lies Over The Ocean'</li>
                    <li>interval: 'm7', song: 'Somewhere (Westside Story)'</li>
                    <li>interval: 'M7', song: 'Superman Theme Song' </li>
                    <li> interval: 'P8', song: 'Somewhere over the Rainbow' </li>

                </ul>
                <p>
                    For a more comprehensive list of songs, refer to: <a href="https://www.earmaster.com/products/free-tools/interval-song-chart-generator.html" target="_blank" rel="noopener noreferrer">Interval Song Chart Generator</a>
                </p>
            </div>
        </div>
    );
}
