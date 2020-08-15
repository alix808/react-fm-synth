import React, { useContext, useEffect, useState } from 'react';
import SynthContext from '../context/synth/synthContext';

const ModulatorDepth = () => {
  const synthContext = useContext(SynthContext);
  const { gain, audioCtx } = synthContext;

  const [depth, setDepth] = useState(40);

  const onChange = (e) => {
    setDepth(e.target.value);
  };

  useEffect(() => {
    if (audioCtx && gain) {
      gain.gain.value = depth;
    }
    // eslint-disable-next-line
  }, [depth]);

  return (
    <input
      type={'range'}
      min={40}
      max={200}
      defaultValue={depth}
      onChange={(e) => onChange(e)}
    />
  );
};

export default ModulatorDepth;
