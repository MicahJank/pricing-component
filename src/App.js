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
        <Card type="Basic" price={'19.99'} storage={'500 GB'} users={'2'} send={'3 GB'} />
        <Card type="Professional" price={'24.99'} storage={'1 TB'} users={'5'} send={'10 GB'} />
        <Card type="Master" price={'39.99'} storage={'2 TB'} users={'10'} send={'20 GB'} />
      </div>
    </div>
  );
}

export default App;
