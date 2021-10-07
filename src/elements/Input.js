import React from 'react';
import styled from 'styled-components';

const Input = (props) =>{
    const {label, placeholder, type, value, _onChange} = props;

    return(
        <React.Fragment>
            <ElInput type={type} placeholder={placeholder} onChange={_onChange}></ElInput>
        </React.Fragment>
    )
}

Input.defaultProps = {
    label: false,
    placeholder:'텍스트를 입력하세요',
    type:'text',
    value:'',
    _onChange: () =>{}
}

const ElInput = styled.input`
    border: 1px solid #444;
    width: 100%auto;
    padding: 8px 12px;
    box-sizing: border-box;

`

export default Input;