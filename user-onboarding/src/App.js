import React, { useState } from 'react';
import Form from './components/Form';
import Person from './components/Person';
import schema from './validation/formSchema';
import * as yup from 'yup';
import './App.css';

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  accept: false,
  decline: false
}

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
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

  const submit = () => {
    const newPerson = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: ['accept', 'decline'].filter(term => !!formValues[term])
    }

    console.log(newPerson, "new");

    setPerson(person.concat(newPerson));
    setFormValues(initialFormValues);
  }

  return (
    <div>
      <div>Hello</div>
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
    </div>
  )
}

export default App;
