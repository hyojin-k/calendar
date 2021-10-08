import React from "react";
// import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { actionCreators as planActions} from '../redux/modules/calendar'

import Text from "../elements/Text";

const PlanModal = ({ title, date, id, completed, show, onHide }) => {
  const dispatch = useDispatch();

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Container> */}
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">오늘 할 일</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>일정</h4>
        <p>{title}</p>
        <h4>일시</h4>
        <p>{date} </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>{
          dispatch(planActions.deletePlanFB(id));
          onHide();
        }}>삭제</Button>
        <Button
          onClick={() => {
            dispatch(planActions.updatePlanFB(id));
            onHide();
          }}
        >
          완료
        </Button>
      </Modal.Footer>
      {/* </Container> */}
    </Modal>
  );
};

export default PlanModal;
