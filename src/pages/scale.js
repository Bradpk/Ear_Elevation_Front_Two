import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';
import Navbar from "../components/navbar";
import styles from "../styles/scale.module.css"
import { useRouter } from 'next/router';
import AuthService from '../services/auth.service';
import { useGlobalState } from '../context/GlobalState';
import axios from 'axios'; 
import jwtDecode from 'jwt-decode';

const ScaleGenerator = () => {
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

    const [generatedScale, setGeneratedScale] = useState('');
    const [previousScale, setPreviousScale] = useState('');
    const [selectedScale, setSelectedScale] = useState('');
    const [attemptedQuestions, setAttemptedQuestions] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [exerciseName, setExerciseName] = useState('Scales');
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

    const scales = ['Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aolian', 'Locrian', 'Blues'];
    

    const generateRandomScale = () => {
        let randomScale = previousScale;
        while (randomScale === previousScale) {
            randomScale = scales[Math.floor(Math.random() * scales.length)];
        }

        setGeneratedScale(randomScale);
        setPreviousScale(randomScale);
        playScale(randomScale);
    };

    const playScale = (interval) => {
        const synth = new Tone.Synth().toDestination();
        const now = Tone.now();

        switch (interval) {
            case 'Ionian':
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("D4", "4n", now + 0.4);
                synth.triggerAttackRelease("E4", "4n", now + 0.8);
                synth.triggerAttackRelease("F4", "4n", now + 1.2);
                synth.triggerAttackRelease("G4", "4n", now + 1.6);
                synth.triggerAttackRelease("A4", "4n", now + 2);
                synth.triggerAttackRelease("B4", "4n", now + 2.4);
                synth.triggerAttackRelease("C5", "4n", now + 2.8);
                break;
            case 'Dorian':
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("D4", "4n", now + 0.4);
                synth.triggerAttackRelease("D#4", "4n", now + 0.8);
                synth.triggerAttackRelease("F4", "4n", now + 1.2);
                synth.triggerAttackRelease("G4", "4n", now + 1.6);
                synth.triggerAttackRelease("A4", "4n", now + 2);
                synth.triggerAttackRelease("A#4", "4n", now + 2.4);
                synth.triggerAttackRelease("C5", "4n", now + 2.8);
                break;
            case 'Phrygian':
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("C#4", "4n", now + 0.4);
                synth.triggerAttackRelease("D#4", "4n", now + 0.8);
                synth.triggerAttackRelease("F4", "4n", now + 1.2);
                synth.triggerAttackRelease("G4", "4n", now + 1.6);
                synth.triggerAttackRelease("G#4", "4n", now + 2);
                synth.triggerAttackRelease("A#4", "4n", now + 2.4);
                synth.triggerAttackRelease("C5", "4n", now + 2.8);
                break;
            case 'Lydian':
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("D4", "4n", now + 0.4);
                synth.triggerAttackRelease("E4", "4n", now + 0.8);
                synth.triggerAttackRelease("F#4", "4n", now + 1.2);
                synth.triggerAttackRelease("G4", "4n", now + 1.6);
                synth.triggerAttackRelease("A4", "4n", now + 2);
                synth.triggerAttackRelease("B4", "4n", now + 2.4);
                synth.triggerAttackRelease("C5", "4n", now + 2.8);
                break;
            case 'Mixolydian':
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("D4", "4n", now + 0.4);
                synth.triggerAttackRelease("E4", "4n", now + 0.8);
                synth.triggerAttackRelease("F4", "4n", now + 1.2);
                synth.triggerAttackRelease("G4", "4n", now + 1.6);
                synth.triggerAttackRelease("A4", "4n", now + 2);
                synth.triggerAttackRelease("A#4", "4n", now + 2.4);
                synth.triggerAttackRelease("C5", "4n", now + 2.8);
                break;
            case 'Aolian':
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("D4", "4n", now + 0.4);
                synth.triggerAttackRelease("D#4", "4n", now + 0.8);
                synth.triggerAttackRelease("F4", "4n", now + 1.2);
                synth.triggerAttackRelease("G4", "4n", now + 1.6);
                synth.triggerAttackRelease("G#4", "4n", now + 2);
                synth.triggerAttackRelease("A#4", "4n", now + 2.4);
                synth.triggerAttackRelease("C5", "4n", now + 2.8);
                break;
            case 'Locrian':
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("C#4", "4n", now + 0.4);
                synth.triggerAttackRelease("D#4", "4n", now + 0.8);
                synth.triggerAttackRelease("F4", "4n", now + 1.2);
                synth.triggerAttackRelease("F#4", "4n", now + 1.6);
                synth.triggerAttackRelease("G#4", "4n", now + 2);
                synth.triggerAttackRelease("A#4", "4n", now + 2.4);
                synth.triggerAttackRelease("C5", "4n", now + 2.8);
                break;
            case 'Blues':
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("D#4", "4n", now + 0.4);
                synth.triggerAttackRelease("F4", "4n", now + 0.8);
                synth.triggerAttackRelease("F#4", "4n", now + 1.2);
                synth.triggerAttackRelease("G4", "4n", now + 1.6);
                synth.triggerAttackRelease("A#4", "4n", now + 2);
                synth.triggerAttackRelease("C5", "4n", now + 2.4);
                break;
            default:
                break;
        }
    };

    const handleScaleSelection = (scale, index) => {
        setSelectedScale(scale);
        setAttemptedQuestions(attemptedQuestions + 1);

        if (scale === generatedScale) {
            setCorrectAnswers(correctAnswers + 1);
            generateRandomScale();
            document.getElementById(`scaleButton-${index}`).classList.add(styles.correct);
            setTimeout(() => {
                document.getElementById(`scaleButton-${index}`).classList.remove(styles.correct);
            }, 400);
        } else {
            document.getElementById(`scaleButton-${index}`).classList.add(styles.incorrect);
            setTimeout(() => {
                document.getElementById(`scaleButton-${index}`).classList.remove(styles.incorrect);
            }, 400);
        }
    };

    const scaleButtons = scales.map((scale, index) => (
        <button
            key={index}
            id={`scaleButton-${index}`}
            onClick={() => handleScaleSelection(scale, index)}
            className={styles.scaleButton}
        >
            {scale}
        </button>
    ));

    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <h2 className={styles.heading}>Scale Generator</h2>
                <button onClick={generateRandomScale} className={styles.button}>Generate Random Scale</button>
                <div className={styles.space}></div>
                <button onClick={() => playScale(generatedScale)} className={styles.button}>Replay Scale</button>
                <div className={styles.buttonGrid}>
                    {scaleButtons}
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
export default ScaleGenerator;