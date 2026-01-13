import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuthHandle } from '../hooks/useAuthForm.jsx';
import { signupSchema } from '../validations/auth.js';
import { Link } from 'react-router-dom';
import AuthWrapper from '../components/AuthWrapper.jsx';

const Signup = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(signupSchema),
    });

    const { onSubmit } = useAuthHandle({ type: 'signup', reset });

    return (
        <AuthWrapper>
    <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-semibold tracking-tight">
                    Create your account
                </h1>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    Get started with managing your store and orders
                </p>
            </div>

            {/* Form */}
            <form
                className="space-y-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                {/* Full Name */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Full name
                    </label>
                    <input
                        {...register('name')}
                        type="text"
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 
                        bg-transparent px-4 py-2 text-sm outline-none 
                        focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-100"
                    />
                    {errors?.name?.message && (
                        <p className="text-xs text-red-500 mt-1">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Email
                    </label>
                    <input
                        {...register('email')}
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 
                        bg-transparent px-4 py-2 text-sm outline-none 
                        focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-100"
                    />
                    {errors?.email?.message && (
                        <p className="text-xs text-red-500 mt-1">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* Password */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Password
                    </label>
                    <input
                        {...register('password')}
                        type="password"
                        placeholder="••••••••"
                        className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 
                        bg-transparent px-4 py-2 text-sm outline-none 
                        focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-100"
                    />
                    {errors?.password?.message && (
                        <p className="text-xs text-red-500 mt-1">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full mt-2 py-2.5 rounded-lg 
                    bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 
                    hover:opacity-90 transition text-sm font-medium"
                >
                    Create account
                </button>
            </form>

            {/* Footer */}
            <p className="text-sm text-center text-zinc-500 dark:text-zinc-400 mt-6">
                Already have an account?
                <Link
                    to="/user/login"
                    className="ml-1 text-zinc-900 dark:text-zinc-100 hover:underline"
                >
                    Log in
                </Link>
            </p>
        </div>
    </div>
</AuthWrapper>

    );
};

export default Signup;
