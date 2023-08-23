import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';
import Navbar from "../components/navbar";
import styles from '../styles/arpeggio.module.css';
import { useRouter } from 'next/router';
import AuthService from '../services/auth.service';
import { useGlobalState } from '../context/GlobalState';
import axios from 'axios'; 
import jwtDecode from 'jwt-decode';

const ArpeggioGenerator = () => {
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

    const [generatedArpeggio, setGeneratedArpeggio] = useState('');
    const [previousArpeggio, setPreviousArpeggio] = useState('');
    const [selectedArpeggio, setSelectedArpeggio] = useState('');
    const [attemptedQuestions, setAttemptedQuestions] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [exerciseName, setExerciseName] = useState('Arpeggios');
    const [logButtonContent, setLogButtonContent] = useState('Log Exercise'); 

    const router = useRouter();
    const { state, dispatch } = useGlobalState();

    // ------ Between these lines needs to be converted into an axios post request
    const handleScore = () => {
        const user_id = state.user.user_id
        const data = {
            exercise_id: exerciseName,
            total_questions: `Attempted: ${attemptedQuestions}`,
            correct_answers: `Correct: ${correctAnswers}`,
            date_completed: currentDate.toISOString(),
            user_id: user_id

        };
        axios.post('http://127.0.0.1:8000/api/user-logs/', data)
        .then(response => {
            console.log('Post request successful:', response.data);
            setLogButtonContent('Logged! Check Account For Details'); 
            setTimeout(() => {
                setLogButtonContent('Log Exercise'); 
            }, 2000); 
        })
        .catch(error => {
            console.error('Error posting data:', error);
        });
};

    const arpeggios = ['Major 7th', 'Minor 7th', 'Dominant 7th', 'Half-Dim 7th', 'Diminished 7th', 'Minor-Major 7th'];

    const generateRandomArpeggio = () => {
        let randomArpeggio = previousArpeggio;
        while (randomArpeggio === previousArpeggio) {
            randomArpeggio = arpeggios[Math.floor(Math.random() * arpeggios.length)];
        }

        setGeneratedArpeggio(randomArpeggio);
        setPreviousArpeggio(randomArpeggio);
        playArpeggio(randomArpeggio);
    };

    const playArpeggio = (interval) => {
        const synth = new Tone.Synth({volume: -10,}).toDestination();
        const reverb = new Tone.Reverb({
            decay: 1.2, 
            preDelay: 0.01,
            wet: 1, 
        }).toDestination();

        synth.connect(reverb);
        reverb.connect(Tone.Destination);
        
        const now = Tone.now();

        switch (interval) {
            case 'Major 7th':
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("E4", "4n", now + 0.4);
                synth.triggerAttackRelease("G4", "4n", now + 0.8);
                synth.triggerAttackRelease("B4", "4n", now + 1.2);
                synth.triggerAttackRelease("C5", "4n", now + 1.6);
                synth.triggerAttackRelease("B4", "4n", now + 2);
                synth.triggerAttackRelease("G4", "4n", now + 2.4);
                synth.triggerAttackRelease("E4", "4n", now + 2.8);
                synth.triggerAttackRelease("C4", "4n", now + 3.2);
                break;
            case 'Minor 7th':
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("D#4", "4n", now + 0.4);
                synth.triggerAttackRelease("G4", "4n", now + 0.8);
                synth.triggerAttackRelease("A#4", "4n", now + 1.2);
                synth.triggerAttackRelease("C5", "4n", now + 1.6);
                synth.triggerAttackRelease("A#4", "4n", now + 2);
                synth.triggerAttackRelease("G4", "4n", now + 2.4);
                synth.triggerAttackRelease("D#4", "4n", now + 2.8);
                synth.triggerAttackRelease("C4", "4n", now + 3.2);
                break;
            case 'Dominant 7th':
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("E4", "4n", now + 0.4);
                synth.triggerAttackRelease("G4", "4n", now + 0.8);
                synth.triggerAttackRelease("A#4", "4n", now + 1.2);
                synth.triggerAttackRelease("C5", "4n", now + 1.6);
                synth.triggerAttackRelease("A#4", "4n", now + 2);
                synth.triggerAttackRelease("G4", "4n", now + 2.4);
                synth.triggerAttackRelease("E4", "4n", now + 2.8);
                synth.triggerAttackRelease("C4", "4n", now + 3.2);
                break;
            case 'Half-Dim 7th':
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("D#4", "4n", now + 0.4);
                synth.triggerAttackRelease("F#4", "4n", now + 0.8);
                synth.triggerAttackRelease("A#4", "4n", now + 1.2);
                synth.triggerAttackRelease("C5", "4n", now + 1.6);
                synth.triggerAttackRelease("A#4", "4n", now + 2);
                synth.triggerAttackRelease("F#4", "4n", now + 2.4);
                synth.triggerAttackRelease("D#4", "4n", now + 2.8);
                synth.triggerAttackRelease("C4", "4n", now + 3.2);
                break;
            case 'Diminished 7th':
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("D#4", "4n", now + 0.4);
                synth.triggerAttackRelease("F#4", "4n", now + 0.8);
                synth.triggerAttackRelease("A4", "4n", now + 1.2);
                synth.triggerAttackRelease("C5", "4n", now + 1.6);
                synth.triggerAttackRelease("A4", "4n", now + 2);
                synth.triggerAttackRelease("F#4", "4n", now + 2.4);
                synth.triggerAttackRelease("D#4", "4n", now + 2.8);
                synth.triggerAttackRelease("C4", "4n", now + 3.2);
                break;
            case 'Minor-Major 7th':
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("D#4", "4n", now + 0.4);
                synth.triggerAttackRelease("G4", "4n", now + 0.8);
                synth.triggerAttackRelease("B4", "4n", now + 1.2);
                synth.triggerAttackRelease("C5", "4n", now + 1.6);
                synth.triggerAttackRelease("B4", "4n", now + 2);
                synth.triggerAttackRelease("G4", "4n", now + 2.4);
                synth.triggerAttackRelease("D#4", "4n", now + 2.8);
                synth.triggerAttackRelease("C4", "4n", now + 3.2);
                break;

            default:
                break;
        }
    };

    const handleArpeggioSelection = (arpeggio, index) => {
        setSelectedArpeggio(arpeggio);
        setAttemptedQuestions(attemptedQuestions + 1);

        if (arpeggio === generatedArpeggio) {
            setCorrectAnswers(correctAnswers + 1);
            generateRandomArpeggio();
            document.getElementById(`arpeggioButton-${index}`).classList.add(styles.correct);
            setTimeout(() => {
                document.getElementById(`arpeggioButton-${index}`).classList.remove(styles.correct);
            }, 400);
        } else {
            document.getElementById(`arpeggioButton-${index}`).classList.add(styles.incorrect);
            setTimeout(() => {
                document.getElementById(`arpeggioButton-${index}`).classList.remove(styles.incorrect);
            }, 400);
        }
    };

    const arpeggioButtons = arpeggios.map((arpeggio, index) => (
        <button
            key={index}
            id={`arpeggioButton-${index}`}
            onClick={() => handleArpeggioSelection(arpeggio, index)}
            className={styles.arpeggioButton}
        >
            {arpeggio}
        </button>
    ));

    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <h2 className={styles.heading}>Arpeggio Generator</h2>
                <button onClick={generateRandomArpeggio} className={styles.button}>Generate Random Arpeggio</button>
                <div className={styles.space}></div>
                <button onClick={() => playArpeggio(generatedArpeggio)} className={styles.button}>Replay Arpeggio</button>
                <div className={styles.buttonGrid}>
                    {arpeggioButtons}
                </div>
                <p className={styles.stats}>Attempted: {attemptedQuestions} | Correct: {correctAnswers}</p>
                {state.user ? (
          
          <button className={styles.logButton} onClick={handleScore}>
          {logButtonContent}
      </button>
          
        ) : (
          
            null
          
        )}
            </div>
        </div>
    );
};

export default ArpeggioGenerator;