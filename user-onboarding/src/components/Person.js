import React from 'react';
import styled from 'styled-components';

const StyledPerson = styled.div
`
    background-color: white;
    border: solid 0.2em grey;
    border-radius: 0.5em;
    padding: 1em;
    margin: 1em;
`

export default function Person(props) {
    const { name, email, terms } = props;

    return (
        <StyledPerson>
            <div>{ name }</div>
            <div>{ email }</div>
            <div>Terms and Conditions: { terms }</div>
        </StyledPerson>
    )
}