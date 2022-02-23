import React from 'react';

export default function Person(props) {
    const { name, email, terms } = props;

    return (
        <div>
            <div>{ name }</div>
            <div>{ email }</div>
            <div>Terms and Conditions: { terms }</div>
        </div>
    )
}