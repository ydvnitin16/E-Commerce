// Signup.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import bgImage from '../.././assets/Hero.jpg';

const Signup = () => {
    const schema = yup.object({
        name: yup.string().trim().required('Name is required'),
        email: yup
            .string()
            .trim()
            .email('Invalid email format')
            .required('Email is required.'),
        password: yup.string().min(6).required('Password is Required'),
    });

    const [form, setForm] = useState({
        name: null,
        email: null,
        password: null,
    });

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(`Form State: `, form)
        reset();
    };

    return (
        <div
            className="relative min-h-screen flex items-center justify-center px-4"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Blur Overlay */}
            <div className="absolute inset-0 bg-white/10 z-0"></div>

            {/* Signup Card */}
            <div className="relative z-10 w-full max-w-md bg-white bg-opacity-90 p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Create Account
                </h2>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Full Name
                        </label>
                        <input
                            {...register('name')}
                            onChange={(e) => setForm(prev => ({...prev, name: e.target.value}))}
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="John Doe"
                        />
                        {errors?.name?.message && <p className="text-sm text-red-500 mt-1">
                            {errors?.name?.message}
                        </p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            {...register('email')}
                            onChange={(e) => setForm(prev => ({...prev, email: e.target.value}))}
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
                        />
                        {errors?.email?.message && <p className="text-sm text-red-500 mt-1">
                            {errors?.email?.message}
                        </p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            {...register('password')}
                            onChange={(e) => setForm(prev => ({...prev, password: e.target.value}))}
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="••••••••"
                        />
                        {errors?.password?.message && <p className="text-sm text-red-500 mt-1">
                            {errors?.password?.message}
                        </p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-sm text-center mt-4">
                    Already have an account?{' '}
                    <Link
                        to="/user/login"
                        className="text-blue-600 hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};
export default Signup;
