import React, { useContext, useEffect } from 'react';
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

  return (
    <div>
      {!audioCtx ? (
        <button onClick={() => synthContext.createAudioCtx()}>play</button>
      ) : (
        <button />
      )}
    </div>
  );
};

export default Init;
