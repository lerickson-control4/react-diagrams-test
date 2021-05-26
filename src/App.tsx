import React from 'react';
import {CanvasWidget} from '@projectstorm/react-canvas-core';

import './App.css';
import initEngine from './helpers/initEngine';

function App() {
  const engine = initEngine();

  return (
    <div className="container" style={{height: '100vh', width: '100vw'}}>
      <CanvasWidget engine={engine} className="canvas" />
    </div>
  );
}

export default App;
