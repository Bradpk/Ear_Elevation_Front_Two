import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';

const ChordGenerator = () => {

    Tone.Transport.bpm.value = 60;

const wholeNoteTime = Tone.Time('1n').toSeconds();

  const chords = [
    ['C3', 'E3', 'G3', 'B3'],
    ['D3', 'F3', 'A3', 'C4'],
    ['E3', 'G3', 'B3', 'D4'],
    ['F3', 'A3', 'C4', 'E4'],
    ['G3', 'B3', 'D4', 'F4'],
    ['A3', 'C4', 'E4', 'G4'],
  ];

  const [playing, setPlaying] = useState(false);
  const [loop, setLoop] = useState(null); 

  const playRandomChord = () => {
    const randomChordIndex = Math.floor(Math.random() * chords.length);
    const chordNotes = chords[randomChordIndex];

    const synth = new Tone.PolySynth({volume: -10,}).toDestination();
    const noteDuration = '32n';
    const reverb = new Tone.Reverb({
        decay: 50, 
        wet: 1, 
    }).toDestination();

    synth.connect(reverb);
    reverb.connect(Tone.Destination); 


    synth.triggerAttackRelease(chordNotes, noteDuration);


    setTimeout(() => {
      synth.triggerRelease();
    }, Tone.Time(noteDuration).toMilliseconds()); 
  };

  useEffect(() => {
    if (playing) {
      const loop = new Tone.Loop(playRandomChord, '1n'); 
      setLoop(loop);

      Tone.Transport.start();
      loop.start();
    } else {
      if (loop) {
        loop.stop();
        Tone.Transport.stop();
        setLoop(null);
      }
    }
  }, [playing]);

  const togglePlayback = () => {
    setPlaying(!playing);
  };

  return (
    <div>
      <h2>Chord Generator</h2>
      <button onClick={togglePlayback}>{playing ? 'Stop Playback' : 'Start Playback'}</button>
    </div>
  );
};

export default ChordGenerator;