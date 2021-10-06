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
        weekends={false}
        events={[
          { title: 'event 1', date: '2021-10-01' },
          { title: 'event 2', date: '2021-10-06' }
        ]}
        />
    </div>
  );
}

export default App;