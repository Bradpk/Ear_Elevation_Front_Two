import React, { useState } from 'react';
import * as Tone from 'tone';
import Navbar from "../components/navbar";

const IntervalGenerator = () => {
    const [generatedInterval, setGeneratedInterval] = useState('');
    const [previousInterval, setPreviousInterval] = useState('');
    const [selectedInterval, setSelectedInterval] = useState('');
    const [attemptedQuestions, setAttemptedQuestions] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);

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

    const playInterval = (interval) => {
        const synth = new Tone.Synth().toDestination();
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

    const handleIntervalSelection = (interval) => {
        setSelectedInterval(interval);
        setAttemptedQuestions(attemptedQuestions + 1);

        if (interval === generatedInterval) {
            setCorrectAnswers(correctAnswers + 1);
            generateRandomInterval();
        }
    };

    const intervalButtons = intervals.map((interval, index) => (
        <button key={index} onClick={() => handleIntervalSelection(interval)}>
            {interval}
        </button>
    ));

    return (
        <div>
               <Navbar />
            <h2>Interval Generator</h2>
            <button onClick={generateRandomInterval}>Generate Random Interval</button>
            <button onClick={() => playInterval(generatedInterval)}>Replay Interval</button>
            <p>Generated Interval: {generatedInterval}</p>
            <div>
                {intervalButtons}
            </div>
            <p>Attempted: {attemptedQuestions} | Correct: {correctAnswers}</p>
        </div>
    );
};

export default IntervalGenerator;
