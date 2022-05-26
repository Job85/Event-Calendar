import './App.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';

import DatePicker from 'react-datepicker';

function App() {
  const locales = {
    'en-US': require('date-fns/locale/en-US')
  }
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <main>
        <Calendar locale={locales} />
      </main>
    </div>
  );
}

export default App;
