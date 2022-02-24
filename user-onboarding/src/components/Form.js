import React from 'react';
import styled from 'styled-components';
import '../App.css';

const StyledForm = styled.div
`
background-color: white;
border: solid 0.2em black;
border-radius: 0.5em;
margin: 1em;
padding:1em;
display: flex;
justify-content: center;
`

export default function Form(props) {
    const { values, change, submit, errors } = props;

    const onSubmit = e => {
        e.preventDefault()
        submit()
      }

     const onChange = e => {
        const { name, value, type, checked } = e.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse)
    }

    return (
        <StyledForm>
            <form onSubmit={onSubmit} >
                <label>Name: { errors.name }
                    <input 
                        type="text"
                        name="name"
                        value={values.name} 
                        onChange={onChange}
                    />
                </label>
                <label>Email: { errors.email }
                    <input 
                        type="email"
                        name="email"
                        value={values.email} 
                        onChange={onChange}
                    />
                </label>
                <label>Password: { errors.password }
                    <input 
                        type="password"
                        name="password"
                        value={values.password} 
                        onChange={onChange}
                    />
                </label>
                <label>Accept Terms and Conditions:
                    <input 
                        type="checkbox"
                        name="accepted"
                        checked={values.accept}
                        onChange={onChange}
                    />
                </label>
                <label>Decline Terms and Conditions:
                    <input 
                        type="checkbox"
                        name="declined"
                        checked={values.decline}
                        onChange={onChange}
                    />
                </label>
                <div>
                    <button id="submitBtn" className='submit-button'>Submit</button>
                </div>
            </form>
        </StyledForm>
    )
}