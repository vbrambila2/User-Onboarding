import React from 'react';

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
        <div>
            <form onSubmit={onSubmit} >
                <label>Name { errors.name }
                <input 
                    type="text"
                    name="name"
                    value={values.name} 
                    onChange={onChange}
                />
                </label>
                <label>Email { errors.email }
                <input 
                    type="email"
                    name="email"
                    value={values.email} 
                    onChange={onChange}
                />
                </label>
                <label>Password { errors.password }
                <input 
                    type="password"
                    name="password"
                    value={values.password} 
                    onChange={onChange}
                />
                </label>
                <label>Accept
                    <input 
                        type="checkbox"
                        name="accept"
                        checked={values.accept}
                        onChange={onChange}
                    />
                </label>
                <label>Decline
                    <input 
                        type="checkbox"
                        name="decline"
                        checked={values.decline}
                        onChange={onChange}
                    />
                </label>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}