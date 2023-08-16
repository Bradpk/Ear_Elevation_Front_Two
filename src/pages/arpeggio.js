import React, { useState } from 'react';
import * as Tone from 'tone';
import Navbar from "../components/navbar";
import styles from '../styles/arpeggio.module.css';

const ArpeggioGenerator = () => {
    const [generatedArpeggio, setGeneratedArpeggio] = useState('');
    const [previousArpeggio, setPreviousArpeggio] = useState('');
    const [selectedArpeggio, setSelectedArpeggio] = useState('');
    const [attemptedQuestions, setAttemptedQuestions] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);

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
        const synth = new Tone.Synth().toDestination();
        const now = Tone.now();

        switch (interval) {
            case 'Major 7th':
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("E4", "4n", now + 0.5);
                synth.triggerAttackRelease("G4", "4n", now + 1);
                synth.triggerAttackRelease("B4", "4n", now + 1.5);
                synth.triggerAttackRelease("C5", "4n", now + 2);
                synth.triggerAttackRelease("B4", "4n", now + 2.5);
                synth.triggerAttackRelease("G4", "4n", now + 3);
                synth.triggerAttackRelease("E4", "4n", now + 3.5);
                synth.triggerAttackRelease("C4", "4n", now + 4);
                break;
            case 'Minor 7th':
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("D#4", "4n", now + 0.5);
                synth.triggerAttackRelease("G4", "4n", now + 1);
                synth.triggerAttackRelease("A#4", "4n", now + 1.5);
                synth.triggerAttackRelease("C5", "4n", now + 2);
                synth.triggerAttackRelease("A#4", "4n", now + 2.5);
                synth.triggerAttackRelease("G4", "4n", now + 3);
                synth.triggerAttackRelease("D#4", "4n", now + 3.5);
                synth.triggerAttackRelease("C4", "4n", now + 4);
                break;
            case 'Dominant 7th':
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("E4", "4n", now + 0.5);
                synth.triggerAttackRelease("G4", "4n", now + 1);
                synth.triggerAttackRelease("A#4", "4n", now + 1.5);
                synth.triggerAttackRelease("C5", "4n", now + 2);
                synth.triggerAttackRelease("A#4", "4n", now + 2.5);
                synth.triggerAttackRelease("G4", "4n", now + 3);
                synth.triggerAttackRelease("E4", "4n", now + 3.5);
                synth.triggerAttackRelease("C4", "4n", now + 4);
                break;
            case 'Half-Dim 7th':
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("D#4", "4n", now + 0.5);
                synth.triggerAttackRelease("F#4", "4n", now + 1);
                synth.triggerAttackRelease("A#4", "4n", now + 1.5);
                synth.triggerAttackRelease("C5", "4n", now + 2);
                synth.triggerAttackRelease("A#4", "4n", now + 2.5);
                synth.triggerAttackRelease("F#4", "4n", now + 3);
                synth.triggerAttackRelease("D#4", "4n", now + 3.5);
                synth.triggerAttackRelease("C4", "4n", now + 4);
                break;
            case 'Diminished 7th':
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("D#4", "4n", now + 0.5);
                synth.triggerAttackRelease("F#4", "4n", now + 1);
                synth.triggerAttackRelease("A4", "4n", now + 1.5);
                synth.triggerAttackRelease("C5", "4n", now + 2);
                synth.triggerAttackRelease("A4", "4n", now + 2.5);
                synth.triggerAttackRelease("F#4", "4n", now + 3);
                synth.triggerAttackRelease("D#4", "4n", now + 3.5);
                synth.triggerAttackRelease("C4", "4n", now + 4);
                break;
            case 'Minor-Major 7th':
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("D#4", "4n", now + 0.5);
                synth.triggerAttackRelease("G4", "4n", now + 1);
                synth.triggerAttackRelease("B4", "4n", now + 1.5);
                synth.triggerAttackRelease("C5", "4n", now + 2);
                synth.triggerAttackRelease("B4", "4n", now + 2.5);
                synth.triggerAttackRelease("G4", "4n", now + 3);
                synth.triggerAttackRelease("D#4", "4n", now + 3.5);
                synth.triggerAttackRelease("C4", "4n", now + 4);
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
            </div>
        </div>
    );
};

export default ArpeggioGenerator;