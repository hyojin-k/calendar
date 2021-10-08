import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as planActions } from "../redux/modules/calendar";
import { history } from "../redux/configstore";

import PlanModal from '../components/PlanModal';
import Button from "../elements/Button";

const Calendar = (props) => {
  const dispatch = useDispatch();
  const plan_list = useSelector((state) => state.calendar.list);
  // console.log(plan_list);

  const [plan_info, setPlan] = useState();
  const [date_info, setDate] = useState();
  const [id_info, setId] = useState();

  const [planModalOn, setPlanModalOn] = useState(false);

  const openModal = (id) =>{
    let target_plan = plan_list.filter((p) =>{
      if(p.id === id){
        return p
      }
    })

    // console.log(target_plan)
    setPlan(target_plan[0].title) 
    setDate(target_plan[0].date)
    setId(target_plan[0].id)
    setPlanModalOn(true);
  }


  React.useEffect(() => {
    dispatch(planActions.setPlanFB());
  }, []);

  const events = plan_list.map((p, idx)=>{
    return{
      id:p.id,
      title: p.title,
      date: p.date,
    }
  })


  return (
    <React.Fragment>

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        height="100vh"
        events={events}
        eventClick={(info) => 
          openModal(info.event.id)
        }
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


      <div>
      <PlanModal title={plan_info} date={date_info} id={id_info}  show={planModalOn} onHide={()=>setPlanModalOn(false) } />

      </div>
    </React.Fragment>
  );
};

export default Calendar;
