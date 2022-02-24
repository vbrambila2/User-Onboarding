import React, { useState } from 'react';
import Form from './components/Form';
import Person from './components/Person';
import schema from './validation/formSchema';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';

const StyledApp = styled.div
`
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  accepted: false,
  declined: false
}

const initialFormErrors = {
  name: "",
  email: "",
  password: ""
}

const initialPerson = []

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [person, setPerson] = useState(initialPerson);
  const [formErrors, setFormErrors] = useState(initialFormErrors) 

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: '' }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value })
  }

  const postNewPerson = newPerson => {
    axios.post(`https://reqres.in/api/users`, newPerson)
      .then(() => {
        setPerson(person.concat(newPerson));
        setFormValues(initialFormValues);
      })
      .catch(err => console.error(err))
  }

  const submit = () => {
    const newPerson = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: ['accepted', 'declined'].filter(term => !!formValues[term])
    }

    postNewPerson(newPerson);
    
  }

  return (
    <StyledApp>
      <h1>Form Validation</h1>
        <Form
          values={formValues}
          change={inputChange}
          submit={submit}
          errors={formErrors}
        />
      { 
        person.map(per => {
          return (
            <Person 
              key={per.name}
              name={per.name} 
              email={per.email}
              terms={per.terms}
            />
          )
        })
      }
    </StyledApp>
  )
}

export default App;
