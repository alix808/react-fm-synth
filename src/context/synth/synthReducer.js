import {
  CREATE_AUDIO_CTX,
  CREATE_ANALYSER,
  CREATE_MODULATOR,
  CREATE_CARRIER,
  CREATE_GAIN,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case CREATE_AUDIO_CTX:
      return {
        ...state,
        audioCtx: action.payload,
      };

    case CREATE_ANALYSER:
      return {
        ...state,
        analyser: action.payload,
      };

    case CREATE_MODULATOR:
      return {
        ...state,
        modulator: action.payload,
      };

    case CREATE_CARRIER:
      return {
        ...state,
        carrier: action.payload,
      };

    case CREATE_GAIN:
      return {
        ...state,
        gain: action.payload,
      };

    default:
      return state;
  }
};
