import * as yup from 'yup';
export const loginSchema = yup.object({
    email: yup
        .string()
        .trim()
        .email('Invalid email format')
        .required('Email is required.'),
    password: yup.string().required('Password is Required'),
});

export const signupSchema = yup.object({
    name: yup.string().trim().required('Name is required'),
    email: yup
        .string()
        .trim()
        .email('Invalid email format')
        .required('Email is required.'),
    password: yup.string().min(6).required('Password is Required'),
});
