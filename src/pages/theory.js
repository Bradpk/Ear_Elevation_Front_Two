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

<p>Imagine music as a magical language, and notes are its alphabet. Just like letters make up words, notes make up music. We have 7 main letters in this musical alphabet: A, B, C, D, E, F, and G. But, here's the twist: they can wear special outfits called sharps (#) or flats (b), which give them a unique flavor.

Now, let's create a musical ladder called a scale. Think of it as a set of steps, but instead of climbing, you're playing notes. The most famous scale is the "happy" major scale. It's like a secret code: you take a big step, then a big step, then a little step, and so on. This sequence creates a happy feeling when you hear it. There are other scales, too, like the "thoughtful" minor scale with a different step pattern, making it sound a bit sad or serious.</p>

<h4>Intervals:</h4>

<p>Imagine you have two friends, and you're holding hands while standing on different steps of that musical ladder. The distance between you two is called an interval. Some intervals sound close, like being right next to each other, while others are like stretching out your arms to touch fingertips.

There are big intervals, like when you skip a few steps, and small intervals, when you're right next to each other. Each interval has its own character. For example, a big skip might sound cheerful, while a small step could feel cozy.</p>

<h4>Chords:</h4>

<p>Now, let's have a little party with your musical friends! When you play certain notes together, it's like they're holding hands and having a good time. We call these groups of notes "chords." The basic chord is a triad, like a musical trio. You have the main note, then one note skipping a step, and another note skipping two steps. Different combinations create different vibes – some sound happy, others sound sad, and some even sound a bit mysterious.</p>

<h4>Key Signatures:</h4>

<p>Imagine you're telling a musical story, and the main character is a note. The key signature is like the costume the character wears. It tells you which notes will be sharp or flat in the story. Each key has its own set of sharps or flats, which give the music its unique feel. So when you see those sharps or flats at the beginning of a piece, you know what kind of adventure you're about to go on.</p>

<h4>Harmony:</h4>

<p>Let's say you and your friends are singing different parts of a song at the same time. The way your voices blend together is harmony. It's like a bunch of colors creating a beautiful painting. Chords are like the main colors you use, and how you mix them creates the overall mood of the music – whether it's joyful, peaceful, or maybe a little mysterious.</p>

<h4>Chord Progressions:</h4>

<p>Think of chord progressions as a musical journey. You start somewhere familiar (home), then visit other places (chords) to explore. Some places feel stable, like a cozy house, while others feel like you're standing on the edge of a cliff, creating a bit of excitement. But in the end, you usually want to come back home to that comfy starting point.</p>

<h4>Rhythm:</h4>

<p>Imagine music as a dance party, and rhythm is the way you move your feet. You have a steady beat like a heart thumping, and notes are your dance steps. Some steps are short, like quick jumps, and some are long, like big leaps. Combining these steps in different ways creates rhythms – just like dancing to your own beat.</p>

<h4>Time Signatures:</h4>

<p>Time signatures are like a musical clock. They tell you how many beats are in each measure and which note gets the beat. Imagine a slice of time, and you're fitting a certain number of beats into it. So, it's like saying, "Let's have 4 heartbeats in this slice, and we'll count them with the snap of a quarter note." It's the rhythm that makes you tap your foot to the music.

Remember, learning music is like unlocking a treasure chest of sounds and stories. These concepts are like keys that open different doors to musical understanding. As you explore, you'll discover endless ways to create and enjoy the magic of music.</p>
            </div>
        </div>
    );
}
