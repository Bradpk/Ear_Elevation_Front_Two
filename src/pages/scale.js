import React, { useState } from 'react';
import * as Tone from 'tone';
import Navbar from "../components/navbar";
import styles from "../styles/scale.module.css"

const ScaleGenerator = () => {
    const [generatedScale, setGeneratedScale] = useState('');
    const [previousScale, setPreviousScale] = useState('');
    const [selectedScale, setSelectedScale] = useState('');
    const [attemptedQuestions, setAttemptedQuestions] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);

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
                synth.triggerAttackRelease("D4", "4n", now + 0.5);
                synth.triggerAttackRelease("E4", "4n", now + 1);
                synth.triggerAttackRelease("F4", "4n", now + 1.5);
                synth.triggerAttackRelease("G4", "4n", now + 2);
                synth.triggerAttackRelease("A4", "4n", now + 2.5);
                synth.triggerAttackRelease("B4", "4n", now + 3);
                synth.triggerAttackRelease("C5", "4n", now + 3.5);
                break;
            case 'Dorian':
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("D4", "4n", now + 0.5);
                synth.triggerAttackRelease("D#4", "4n", now + 1);
                synth.triggerAttackRelease("F4", "4n", now + 1.5);
                synth.triggerAttackRelease("G4", "4n", now + 2);
                synth.triggerAttackRelease("A4", "4n", now + 2.5);
                synth.triggerAttackRelease("A#4", "4n", now + 3);
                synth.triggerAttackRelease("C5", "4n", now + 3.5);
                break;
            case 'Phrygian':
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("C#4", "4n", now + 0.5);
                synth.triggerAttackRelease("D#4", "4n", now + 1);
                synth.triggerAttackRelease("F4", "4n", now + 1.5);
                synth.triggerAttackRelease("G4", "4n", now + 2);
                synth.triggerAttackRelease("G#4", "4n", now + 2.5);
                synth.triggerAttackRelease("A#4", "4n", now + 3);
                synth.triggerAttackRelease("C5", "4n", now + 3.5);
                break;
            case 'Lydian':
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("D4", "4n", now + 0.5);
                synth.triggerAttackRelease("E4", "4n", now + 1);
                synth.triggerAttackRelease("F#4", "4n", now + 1.5);
                synth.triggerAttackRelease("G4", "4n", now + 2);
                synth.triggerAttackRelease("A4", "4n", now + 2.5);
                synth.triggerAttackRelease("B4", "4n", now + 3);
                synth.triggerAttackRelease("C5", "4n", now + 3.5);
                break;
            case 'Mixolydian':
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("D4", "4n", now + 0.5);
                synth.triggerAttackRelease("E4", "4n", now + 1);
                synth.triggerAttackRelease("F4", "4n", now + 1.5);
                synth.triggerAttackRelease("G4", "4n", now + 2);
                synth.triggerAttackRelease("A4", "4n", now + 2.5);
                synth.triggerAttackRelease("A#4", "4n", now + 3);
                synth.triggerAttackRelease("C5", "4n", now + 3.5);
                break;
            case 'Aolian':
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("D4", "4n", now + 0.5);
                synth.triggerAttackRelease("D#4", "4n", now + 1);
                synth.triggerAttackRelease("F4", "4n", now + 1.5);
                synth.triggerAttackRelease("G4", "4n", now + 2);
                synth.triggerAttackRelease("G#4", "4n", now + 2.5);
                synth.triggerAttackRelease("A#4", "4n", now + 3);
                synth.triggerAttackRelease("C5", "4n", now + 3.5);
                break;
            case 'Locrian':
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("C#4", "4n", now + 0.5);
                synth.triggerAttackRelease("D#4", "4n", now + 1);
                synth.triggerAttackRelease("F4", "4n", now + 1.5);
                synth.triggerAttackRelease("F#4", "4n", now + 2);
                synth.triggerAttackRelease("G#4", "4n", now + 2.5);
                synth.triggerAttackRelease("A#4", "4n", now + 3);
                synth.triggerAttackRelease("C5", "4n", now + 3.5);
                break;
            case 'Blues':
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("D#4", "4n", now + 0.5);
                synth.triggerAttackRelease("F4", "4n", now + 1);
                synth.triggerAttackRelease("F#4", "4n", now + 1.5);
                synth.triggerAttackRelease("G4", "4n", now + 2);
                synth.triggerAttackRelease("A#4", "4n", now + 2.5);
                synth.triggerAttackRelease("C5", "4n", now + 3);
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
            </div>
        </div>
    );
};
export default ScaleGenerator;