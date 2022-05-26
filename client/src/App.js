import './App.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';

function App() {
  // const [value, setValue] = useState(new Date());
  // function onChange(nextValue) {
  //   setValue(nextValue);
  // }
  const [value, onChange] = useState(new Date(2022, 0, 1));

  return (
    <div className="App">
      <header className="App-header">

      </header>
      <main>
        <Calendar onChange={onChange} value={value} />
      </main>
    </div>
  );
}

export default App;
