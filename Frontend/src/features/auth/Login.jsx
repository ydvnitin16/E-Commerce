// Login.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import bgImage from '../.././assets/Hero.jpg';
import { useState } from 'react';
import { useAuthStore } from '../../stores/UseAuthStore.jsx';

const Login = () => {
    const navigate = useNavigate();

    const storeLogin = useAuthStore((state) => state.login);

    const schema = yup.object({
        email: yup
            .string()
            .trim()
            .email('Invalid email format')
            .required('Email is required.'),
        password: yup.string().required('Password is Required'),
    });

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [form, setForm] = useState({
        email: null,
        password: null,
    });

    const userLogin = async (data) => {
        console.log(`Form State : `, form);

        const res = await fetch(
            `${import.meta.env.VITE_SERVER_URL}/user/login`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            }
        );

        const resData = await res.json();
        if (res.ok) {
            storeLogin(resData.user);
            navigate('/')
        }
        console.log(res.data)
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
            <div className="absolute inset-0  bg-white/10 z-0"></div>

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md bg-white bg-opacity-90 p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                <form className="space-y-4" onSubmit={handleSubmit(userLogin)}>
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            {...register('email')}
                            onChange={(e) =>
                                setForm((prev) => ({
                                    ...prev,
                                    email: e.target.value,
                                }))
                            }
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
                        />
                        <p className="text-sm text-red-500 mt-1">
                            {errors?.email?.message}
                        </p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            {...register('password')}
                            onChange={(e) =>
                                setForm((prev) => ({
                                    ...prev,
                                    password: e.target.value,
                                }))
                            }
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="••••••••"
                        />
                        <p className="text-sm text-red-500 mt-1">
                            {errors?.password?.message}
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-sm text-center mt-4">
                    Don't have an account?{' '}
                    <Link
                        to="/user/signup"
                        className="text-blue-600 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
