import React, { useState } from 'react';
import Toggle from './components/Toggle.js';
import Card from './components/Card.js';
import './sass/app.scss';
import './sass/variables.scss';
function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <Toggle toggle={toggle} setToggle={setToggle} />
      <div className="card-section">
        <Card type="Basic" price={toggle ? '199.99' : '19.99'} storage={'500 GB'} users={'2'} send={'3 GB'} />
        <Card type="Professional" price={toggle ? '249.99' : '24.99'} storage={'1 TB'} users={'5'} send={'10 GB'} />
        <Card type="Master" price={toggle ? '399.99' : '39.99'} storage={'2 TB'} users={'10'} send={'20 GB'} />
      </div>
    </div>
  );
}

export default App;
