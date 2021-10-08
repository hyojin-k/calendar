import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as planActions } from "../redux/modules/calendar";
import { history } from "../redux/configstore";

import PlanModal from "../components/PlanModal";
import Button from "../elements/Button";

const Calendar = (props) => {
  const dispatch = useDispatch();
  const plan_list = useSelector((state) => state.calendar.list);
  // console.log(plan_list);

  const [plan_info, setPlan] = useState();
  const [date_info, setDate] = useState();
  const [id_info, setId] = useState();
  const [state_info, setState] = useState(false);
  const [completedShow, setCompletedShow] = useState();
  const [allShow, setAllShow] = useState(false); 

  const [planModalOn, setPlanModalOn] = useState(false);

  const openModal = (id) => {
    let target_plan = plan_list.filter((p) => {
      if (p.id === id) {
        return p;
      }
    });

    // console.log(target_plan)
    setPlan(target_plan[0].title);
    setDate(target_plan[0].date);
    setId(target_plan[0].id);
    setState(target_plan[0].completed);
    setPlanModalOn(true);
  };

  React.useEffect(() => {
    dispatch(planActions.setPlanFB());
  }, []);

  const events = plan_list.map((p, idx) => {
    return {
      id: p.id,
      title: p.title,
      date: p.date,
      color: p.completed ? "tomato" : "cornflowerblue",
      completed : p.completed
    };
  });

  const completedEvents = events.filter((p, idx)=>{
    return p.completed === true;
  })

  function toggle() {
    setAllShow(!allShow);
    setCompletedShow(!completedShow);
  }

  return (
    <React.Fragment>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        height="100vh"
        events={completedShow? completedEvents :events}
        eventClick={(info) => openModal(info.event.id)}
      />

      {allShow ? (
        <Button is_float padding="8px 16px" bgColor="goldenrod" bottom="64px" _onClick={toggle}>
          전체 일정
        </Button>
      ) : (
        <Button is_float padding="8px 16px" bgColor="goldenrod" bottom="64px" _onClick={toggle}>
          완료 일정
        </Button>
      )}

      <Button
        is_float
        padding="8px 16px"
        bgColor="sienna"
        bottom="16px"
        _onClick={() => {
          history.push("/addplan");
        }}
      >
        일정 추가
      </Button>

      <PlanModal
        title={plan_info}
        date={date_info}
        id={id_info}
        completed={state_info}
        show={planModalOn}
        onHide={() => setPlanModalOn(false)}
      />
    </React.Fragment>
  );
};

export default Calendar;
