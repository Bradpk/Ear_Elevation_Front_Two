import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';
import Navbar from "../components/navbar";
import styles from '../styles/interval.module.css'; 
import { useRouter } from 'next/router';
import AuthService from '../services/auth.service';
import { useGlobalState } from '../context/GlobalState';
import axios from 'axios'; 
import jwtDecode from 'jwt-decode';
//-----------------------------------------------------------------------------------------------------------------------------


const IntervalGenerator = () => {
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

    
    
    const [generatedInterval, setGeneratedInterval] = useState('');
    const [previousInterval, setPreviousInterval] = useState('');
    const [selectedInterval, setSelectedInterval] = useState('');
    const [attemptedQuestions, setAttemptedQuestions] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [exerciseName, setExerciseName] = useState('Intervals');
    const [logButtonContent, setLogButtonContent] = useState('Log Exercise'); 
    

 
    const router = useRouter();
    const { state, dispatch } = useGlobalState();
//-----------------------------------------------------------------------------------------------------------------------------
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
            }, 1500); 
        })
        .catch(error => {
            console.error('Error posting data:', error);
        });
};
//-----------------------------------------------------------------------------------------------------------------------------
    const intervals = ['m2', 'M2', 'm3', 'M3', 'P4', 'D5', 'P5', 'm6', 'M6', 'm7', 'M7', 'P8'];

    const generateRandomInterval = () => {
        let randomInterval = previousInterval;
        while (randomInterval === previousInterval) {
            randomInterval = intervals[Math.floor(Math.random() * intervals.length)];
        }

        setGeneratedInterval(randomInterval);
        setPreviousInterval(randomInterval);
        playInterval(randomInterval);
    };
//-----------------------------------------------------------------------------------------------------------------------------
    const playInterval = (interval) => {
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
            case 'm2':
                synth.triggerAttackRelease('C4', '4n', now);
                synth.triggerAttackRelease('C#4', '4n', now + 0.5);
                break;
            case 'M2':
                synth.triggerAttackRelease('C4', '4n', now);
                synth.triggerAttackRelease('D4', '4n', now + 0.5);
                break;
            case 'm3':
                synth.triggerAttackRelease('C4', '4n', now);
                synth.triggerAttackRelease('D#4', '4n', now + 0.5);
                break;
            case 'M3':
                synth.triggerAttackRelease('C4', '4n', now);
                synth.triggerAttackRelease('E4', '4n', now + 0.5);
                break;
            case 'P4':
                synth.triggerAttackRelease('C4', '4n', now);
                synth.triggerAttackRelease('F4', '4n', now + 0.5);
                break;
            case 'D5':
                synth.triggerAttackRelease('C4', '4n', now);
                synth.triggerAttackRelease('F#4', '4n', now + 0.5);
                break;
            case 'P5':
                synth.triggerAttackRelease('C4', '4n', now);
                synth.triggerAttackRelease('G4', '4n', now + 0.5);
                break;
            case 'm6':
                synth.triggerAttackRelease('C4', '4n', now);
                synth.triggerAttackRelease('G#4', '4n', now + 0.5);
                break;
            case 'M6':
                synth.triggerAttackRelease('C4', '4n', now);
                synth.triggerAttackRelease('A4', '4n', now + 0.5);
                break;
            case 'm7':
                synth.triggerAttackRelease('C4', '4n', now);
                synth.triggerAttackRelease('A#4', '4n', now + 0.5);
                break;
            case 'M7':
                synth.triggerAttackRelease('C4', '4n', now);
                synth.triggerAttackRelease('B4', '4n', now + 0.5);
                break;
            case 'P8':
                synth.triggerAttackRelease('C4', '4n', now);
                synth.triggerAttackRelease('C5', '4n', now + 0.5);
                break;
            default:
                break;
        }
    };
//-----------------------------------------------------------------------------------------------------------------------------
    const handleIntervalSelection = (interval, index) => {
        setSelectedInterval(interval);
        setAttemptedQuestions(attemptedQuestions + 1);
    
        if (interval === generatedInterval) {
            setCorrectAnswers(correctAnswers + 1);
            generateRandomInterval();
            document.getElementById(`intervalButton-${index}`).classList.add(styles.correct);
            setTimeout(() => {
                document.getElementById(`intervalButton-${index}`).classList.remove(styles.correct);
            }, 400);
        } else {
            document.getElementById(`intervalButton-${index}`).classList.add(styles.incorrect);
            setTimeout(() => {
                document.getElementById(`intervalButton-${index}`).classList.remove(styles.incorrect);
            }, 400);
        }
    };
//-----------------------------------------------------------------------------------------------------------------------------
    const intervalButtons = intervals.map((interval, index) => (
        <button
            key={index}
            id={`intervalButton-${index}`} 
            onClick={() => handleIntervalSelection(interval, index)}
            className={styles.intervalButton} 
        >
            {interval}
        </button>
    ));
//-----------------------------------------------------------------------------------------------------------------------------
    return (
        <div>
            <Navbar />
            <div className={styles.container}> 
                <h2 className={styles.heading}>Interval Generator</h2>
                <button onClick={generateRandomInterval} className={styles.button}>Generate Random Interval</button>
                <div className={styles.space}></div>
                <button onClick={() => playInterval(generatedInterval)} className={styles.button}>Replay Interval</button>
                <div className={styles.buttonGrid}>
                    {intervalButtons}
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
export default IntervalGenerator;
//-----------------------------------------------------------------------------------------------------------------------------