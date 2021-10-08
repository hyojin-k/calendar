import React from 'react';
import styled from 'styled-components';

const Text = (props) =>{

    const {size, color, bold, margin, children} = props;
    const styles = {
        bold: bold,
        color: color,
        size: size,
        margin: margin
    }

    return(
        <React.Fragment>
            <P {...styles}>
                {children}
            </P>
        </React.Fragment>
    )
}


Text.defaultProps = {
    size:'14px',
    color: '#333',
    bold: false,
    margin: false,
    children: null,
}

const P = styled.p`
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => (props.bold?'600':'400')};
    ${(props) => (props.margin? `margin: ${props.margin}`:'')}
`

export default Text;