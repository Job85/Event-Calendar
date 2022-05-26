import './App.css';
import React from 'react';
import CalendarComp from './components/CalendarComp'

function App() {
  const locales = {
    'en-US': require('date-fns/locale/en-US')
  }
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <main>
        <div>
          <h3>Choose a Date for Your Event</h3>
          <CalendarComp />
        </div>
      </main>
    </div>
  );
}

export default App;
