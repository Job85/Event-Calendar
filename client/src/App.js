import './App.css';
import React from 'react';
import CalendarComp from './components/CalendarComp'
import DateRangeComp from './components/DateRangeComp';

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
        <div>
          <h3>Choose a Date Range for Event</h3>
          <DateRangeComp />
        </div>
      </main>
    </div>
  );
}

export default App;
