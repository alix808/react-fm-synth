import React, { useContext, useEffect, useRef } from 'react';
import SynthContext from '../context/synth/synthContext';

const Init = () => {
  const synthContext = useContext(SynthContext);
  const { audioCtx, analyser, modulator, carrier, gain } = synthContext;

  useEffect(() => {
    if (audioCtx !== null) {
      synthContext.createAnalyser(audioCtx);
      synthContext.createModulator(audioCtx);
      synthContext.createCarrier(audioCtx);
      synthContext.createGain(audioCtx);
    }
    // eslint-disable-next-line
  }, [audioCtx]);

  useEffect(() => {
    if (analyser && modulator && carrier && gain) {
      modulator.connect(gain);
      gain.connect(carrier.frequency);

      carrier.connect(analyser);
      analyser.connect(audioCtx.destination);

      modulator.start();
      carrier.start();
    }
    // eslint-disable-next-line
  }, [analyser, modulator, carrier, gain]);

  const inputEl = useRef(null);

  const onClick = () => {
    if (audioCtx.state === 'running') {
      audioCtx.suspend();
    } else if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  };

  return (
    <div>
      {!audioCtx ? (
        <button onClick={() => synthContext.createAudioCtx()}>play</button>
      ) : (
        <button ref={inputEl} onClick={onClick}></button>
      )}
    </div>
  );
};

export default Init;
