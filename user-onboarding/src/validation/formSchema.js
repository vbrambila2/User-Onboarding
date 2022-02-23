import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string().trim().required('Name is required'),
    email: yup.string().required('Must be a valid email'),
    password: yup.string().trim().required('Password is required'),
    accept: yup.boolean(),
    decline: yup.boolean()
})

export default formSchema;