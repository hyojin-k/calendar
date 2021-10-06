import React from 'react'
import FullCalendar from '@fullcalendar/react'
// import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

import { useSelector } from 'react-redux';

const Calendar = (props) => {
  const plan_list = useSelector((state) => state.calendar.list)
  console.log(plan_list)

  return (
    <React.Fragment>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin,listPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={
            plan_list
        }
        />
    </React.Fragment>
  );
}

export default Calendar;
