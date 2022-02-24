import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string().trim().required('Name is required'),
    email: yup.string().required('Must be a valid email'),
    password: yup.string().trim().required('Password is required'),
    accepted: yup.boolean(),
    declined: yup.boolean()
})

export default formSchema;