import './App.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';

function App() {
  // const [value, setValue] = useState(new Date());
  // function onChange(nextValue) {
  //   setValue(nextValue);
  // }
  const [today, activeStartDate] = useState(new Date(2022, 0, 1));
  function onChange(nextDay) {
    activeStartDate(nextDay)
  }
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <main>
        <Calendar onChange={onChange} today={today} />
      </main>
    </div>
  );
}

export default App;
