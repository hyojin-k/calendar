import React from 'react'
import FullCalendar from '@fullcalendar/react'
// import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

import { useSelector } from 'react-redux';

import Button from '../elements/Button';

const Calendar = (props) => {
  const plan_list = useSelector((state) => state.calendar.list)
  console.log(plan_list)

  return (
    <React.Fragment>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin,listPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        height = '100vh'
        events={
            plan_list
        }
        />
        <Button is_float padding = '8px 16px' bgColor = '#444' bottom = '52px'>COMPLETE</Button>
        <Button is_float padding = '8px 16px' bgColor = '#444' bottom = '16px'>ADD</Button>
    </React.Fragment>
  );
}

export default Calendar;
