import React from 'react';
import SynthState from './context/synth/SynthState';
import Init from './comps/Init';
import ModulatorFreq from './comps/ModulatorFreq';
import ModulatorDepth from './comps/ModulatorDepth';
import SpectrumAnalyser from './comps/SpectrumAnalyser';
import Github from './comps/Github';
import './App.css';

const App = () => (
  <SynthState>
    <section>
      <Init />
      <ModulatorFreq />
      <ModulatorDepth />
      <Github />
    </section>
    <SpectrumAnalyser />
  </SynthState>
);

export default App;
