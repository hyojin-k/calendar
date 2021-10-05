import React from 'react'
import FullCalendar from '@fullcalendar/react'
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

function App() {
  return (
    <div className="App">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin,listPlugin]}
        initialView="dayGridMonth"
      />
    </div>
  );
}

export default App;
