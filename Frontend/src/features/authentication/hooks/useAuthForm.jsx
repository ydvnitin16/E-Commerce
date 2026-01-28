import toast from 'react-hot-toast';
import { loginUser, signupUser } from '../services/auth.api';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '@/stores/useAuthStore';

export const useAuthHandle = ({ type, reset }) => {
    const { setAuthUser } = useAuthStore();
    const navigate = useNavigate();

    const onSubmit = async (formData) => {
        try {
            const action = type === 'login' ? loginUser : signupUser;

            const data = await action(formData);

            setAuthUser(data.user);
            toast.success(
                type === 'login'
                    ? 'Login successful'
                    : 'Account created successfully',
            );

            reset();
            const role = data.user.role;
            const navigateTo =
                role === 'ADMIN'
                    ? '/admin/dashboard'
                    : role === 'VENDOR'
                      ? '/store'
                      : '/';
            navigate(navigateTo);
        } catch (err) {
            toast.error(err.message || 'Something went wrong');
        }
    };

    return { onSubmit };
};
