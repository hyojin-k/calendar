import React from "react";
import FullCalendar from "@fullcalendar/react";
// import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as planActions } from "../redux/modules/calendar";
import { history } from "../redux/configstore";

import Modal from '../components/Modal.js';
import Button from "../elements/Button";

const Calendar = (props) => {
  const dispatch = useDispatch();
  const plan_list = useSelector((state) => state.calendar.list);
  console.log(plan_list);

  const events = plan_list.map((p, idx)=>{
    return{
      id:p.id,
      title: p.title,
      date: p.date,
    }
  })

  React.useEffect(() => {
    dispatch(planActions.getPlanFB());
  }, []);

  return (
    <React.Fragment>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        height="100vh"
        events={events}
        eventClick={(info) => {
          console.log(info.event.title);
        }}
      />
      <Button is_float padding="8px 16px" bgColor="#444" bottom="52px">
        COMPLETE
      </Button>
      <Button
        is_float
        padding="8px 16px"
        bgColor="#444"
        bottom="16px"
        _onClick={() => {
          history.push("/addplan");
        }}
      >
        ADD
      </Button>
    </React.Fragment>
  );
};

export default Calendar;
