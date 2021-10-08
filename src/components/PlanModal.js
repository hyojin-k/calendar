import React from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import { Modal, Button } from 'react-bootstrap'

import Text from '../elements/Text';

const PlanModal = ({title, date, id, show, onHide}) =>{

        return (
          <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            {/* <Container> */}
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">
                오늘 할 일
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>일정</h4>
              <p>{title}</p>
              <h4>일시</h4>
              <p>{date} </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={onHide}>취소</Button>
              <Button onClick={onHide}>완료</Button>
            </Modal.Footer>
            {/* </Container> */}
          </Modal>
        );
      
      
}

export default PlanModal;
