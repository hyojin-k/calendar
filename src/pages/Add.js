import React, { useState } from "react";
import styled from "styled-components";
// import TextField from '@mui/material/TextField';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DateTimePicker from '@mui/lab/DateTimePicker';
// import DateAdapter from '@mui/lab/AdapterDateFns';

import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import {history} from '../redux/configstore'
import { actionCreators as userActions} from '../redux/modules/calendar';
import { useDispatch } from 'react-redux';

import Text from "../elements/Text";
import Button from "../elements/Button";
import Input from '../elements/Input';

const Add = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState('')
  const [selectedDate, handleDateChange] = useState(new Date());

  const changeTitle = (e) =>{
      setTitle(e.target.value);
  }

//   const add = () =>{
//       dispatch(userActions.calendar({title:'카페가기'}))
//   }

  return (
    <React.Fragment>
      <Container>
        <Wrap>
          <Text bold size='20px'>일정</Text>
          <Input placeholder = '일정을 입력하세요' value= {title}  _onChange = {changeTitle} />
        </Wrap>

        <Wrap>
          <Text bold size='20px'>일시</Text>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker 
                autoOk
                ampm={false}
                openTo='year'
                // views={['year', 'month', 'day']}
                value={selectedDate} 
                onChange={handleDateChange}
                format = 'yyyy-MM-dd HH:mm:ss'
                />
          </MuiPickersUtilsProvider>
        </Wrap>

        <Wrap>
          <Button width="auto" bgColor="#444" padding="8px 16px" margin="0 8px" _onClick={()=>{history.push('/')}}>
            취소
          </Button>
          <Button width="auto" bgColor="#444" padding="8px 16px" margin="0 8px"_onClick={() =>{}}>
            완료
          </Button>
        </Wrap>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 50%;
  background-color: #fff;
  border: 2px solid #dbdbdb;
  border-radius: 50px;
  text-align: center;
  padding: 50px 0;
  margin: 100px auto;
`;

const Wrap = styled.div`
    width:100%;
    margin: 30px 0;
`

export default Add;
