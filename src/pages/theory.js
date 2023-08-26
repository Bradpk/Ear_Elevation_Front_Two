import Link from "next/link";
import Navbar from "../components/navbar";
import styles from '../styles/theory.module.css';
import { useGlobalState } from '../context/GlobalState';
import React, { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode';
//------------------------------------------------------------------------------------------------------------------------------
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
//------------------------------------------------------------------------------------------------------------------------------
    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <h1>Theory Basics</h1>
                <p>For those either new to music theory or for those who want a refresher here is a break down of some of the most essential concepts in music.</p>
       <h4>Notes and Scales:</h4>

<p>In music theory, notes serve as the fundamental building blocks of musical composition. These notes are represented by the letters A, B, C, D, E, F, and G. However, notes can be modified by accidentals, namely sharps (#) and flats (b), which raise or lower their pitch respectively. Scales are sequences of these notes that form a musical framework. The major scale, for instance, is constructed using a specific pattern of whole and half steps, resulting in a sequence that imparts a sense of brightness. On the other hand, the minor scale follows a different pattern, producing a relatively somber or pensive mood.</p>

<h4>Intervals:</h4>

<p>Intervals refer to the measurable distance between two notes in terms of pitch. These intervals can be categorized as either small (minor seconds, major seconds) or large (minor thirds, major thirds, perfect fourths, perfect fifths, etc.). Each interval contributes to the overall harmonic texture of a musical piece, with the size of the interval often influencing its emotional quality.</p>

<h4>Chords:</h4>

<p>Chords are combinations of three or more notes played simultaneously. The most basic type is the triad, consisting of a root note, a third interval above the root, and a fifth interval above the root. Chords are integral to harmonies in music and are organized based on their respective degrees within a scale. Different chord progressions produce distinct emotional impressions, with the quality of the chord (major, minor, diminished, augmented) playing a significant role.</p>

<h4>Key Signatures:</h4>

<p>Key signatures determine the tonal center, or the primary note around which a musical piece revolves. Each key has a specific arrangement of sharps or flats that define its tonality. The key signature guides which notes are naturally altered throughout the composition, either through sharps or flats, which in turn affects the overall sound and character of the piece.</p>

<h4>Harmony:</h4>

<p>Harmony involves the simultaneous sounding of different notes to create chords and progressions. The interaction of these chords generates harmonies, which contribute to the texture and emotional impact of the music. Harmonic analysis evaluates the relationships between chords and their movement, enriching the understanding of a piece's structural elements.</p>

<h4>Chord Progressions:</h4>

<p>Chord progressions are sequences of chords that establish a musical journey. The succession of chords determines the flow and narrative of the composition. The choice of chords and their order influences the sense of tension, release, and resolution throughout the piece, guiding the listener through varying emotional states.</p>

<h4>Rhythm:</h4>

<p>Rhythm encompasses the temporal aspect of music, involving the arrangement of notes and silences over time. Musical rhythm is organized by patterns of duration, accent, and meter. Meter is defined by time signatures, which indicate the number of beats per measure and the rhythmic value assigned to each beat. Rhythmic intricacies contribute to the groove and pacing of a musical work.</p>

<h4>Time Signatures:</h4>

<p>Time signatures indicate the rhythmic framework within a musical composition. They consist of two numbers, with the top number representing the number of beats in a measure and the bottom number designating the rhythmic value of each beat. Time signatures dictate the structure and feel of the rhythm, influencing the listener's perception of musical time and phrasing.</p>
            </div>
        </div>
    );
}
