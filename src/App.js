import React from 'react';
import Toggle from './components/Toggle.js';
import Card from './components/Card.js';
import './sass/app.scss';
import './sass/variables.scss';
function App() {
  return (
    <div className="App">
      <Toggle />
      <div className="card-section">
        <Card name="Basic" />
        <Card name="Professional" />
        <Card name="Master" />
      </div>
    </div>
  );
}

export default App;
