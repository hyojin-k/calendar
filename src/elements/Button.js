import React from 'react';
import styled from 'styled-components';

const Button = (props) =>{
    const {text, _onClick, is_float,width,height, margin, padding,  bgColor, color, bottom,  children} = props;

    const styles ={
        width: width,
        height:height,
        margin: margin,
        padding: padding,
        bgColor:bgColor,
        color: color,
        bottom:bottom,
    }

    if(is_float){
        return(
            <React.Fragment>
            <FloatButton {...styles} onClick={_onClick}> {text?text:children} </FloatButton>
        </React.Fragment>
        )
    }

    return(
        <React.Fragment>
            <ElButton {...styles} onClick={_onClick}> {text?text:children} </ElButton>
        </React.Fragment>
    )
}

Button.defaultProps = {
    text:false,
    _onClick: () =>{},
    is_float: false, 
    width: 'auto',
    height:false,
    margin:false,
    padding:false,
    bgColor:'none',
    color:'#fff',
    bottom:0,
    children:null,
}

const FloatButton = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color:${(props) => props.bgColor};
    color: ${(props) => props.color};
    box-sizing: border-box;
    position: fixed;
    bottom: ${(props)=> props.bottom};
    right: 16px;
    text-align: center;
    vertical-align: middle;
    border:none;
    border-radius: 50px;
    cursor: pointer;
    padding: ${(props) => props.padding};
    ${(props) => (props.margin? `margin: ${props.margin};`:'')}
    z-index: 10;
`

const ElButton = styled.button`
    width: ${(props) => props.width};
    background-color:${(props) => props.bgColor};
    color: #fff;
    box-sizing: border-box;
    border:none;
    border-radius: 10px;
    cursor: pointer;
    padding: ${(props) => props.padding};
    ${(props) => (props.margin? `margin: ${props.margin};`:'')}
`

export default Button;
