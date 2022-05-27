import './App.css';
import React from 'react';
import CalendarComp from './components/CalendarComp'
import DateRangeComp from './components/DateRangeComp';
import DateRangePickerComp from './components/DateRangePickerComp'

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
        <div>
          <h3>Date Range Picker</h3>
          <DateRangePickerComp />
        </div>
      </main>
    </div>
  );
}

export default App;
