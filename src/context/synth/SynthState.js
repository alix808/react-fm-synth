import React, { useReducer } from 'react';
import SynthContext from './synthContext';
import SynthReducer from './synthReducer';
import {
  CREATE_AUDIO_CTX,
  CREATE_ANALYSER,
  CREATE_MODULATOR,
  CREATE_CARRIER,
  CREATE_GAIN,
} from '../types';

const SynthState = (props) => {
  const initialState = {
    audioCtx: null,
    analyser: null,
    oscillator: null,
  };

  const [state, dispatch] = useReducer(SynthReducer, initialState);

  const createAudioCtx = () => {
    const audioCtx = new AudioContext();

    dispatch({
      type: CREATE_AUDIO_CTX,
      payload: audioCtx,
    });
  };

  const createAnalyser = (audioCtx) => {
    const analyser = audioCtx.createAnalyser();

    dispatch({
      type: CREATE_ANALYSER,
      payload: analyser,
    });
  };

  const createModulator = (audioCtx) => {
    const modulator = audioCtx.createOscillator();
    modulator.frequency.value = 44;
    dispatch({
      type: CREATE_MODULATOR,
      payload: modulator,
    });
  };

  const createCarrier = (audioCtx) => {
    const carrier = audioCtx.createOscillator();
    carrier.frequency.value = 44;
    dispatch({
      type: CREATE_CARRIER,
      payload: carrier,
    });
  };

  // modulation depth
  const createGain = (audioCtx) => {
    const gainNode = audioCtx.createGain();
    gainNode.gain.value = 40;

    dispatch({
      type: CREATE_GAIN,
      payload: gainNode,
    });
  };

  return (
    <SynthContext.Provider
      value={{
        audioCtx: state.audioCtx,
        analyser: state.analyser,
        modulator: state.modulator,
        carrier: state.carrier,
        gain: state.gain,
        createAnalyser,
        createModulator,
        createAudioCtx,
        createCarrier,
        createGain,
      }}
    >
      {props.children}
    </SynthContext.Provider>
  );
};

export default SynthState;
