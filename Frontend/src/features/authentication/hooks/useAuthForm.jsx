import toast from 'react-hot-toast';
import { loginUser, signupUser } from '../services/auth.api';
import { useNavigate } from 'react-router-dom';

export const useAuthHandle = ({ type, reset }) => {
    const navigate = useNavigate();

    const onSubmit = async (formData) => {
        try {
            const action = type === 'login' ? loginUser : signupUser;

            const data = await action(formData);

            if (!data?.success) {
                toast.error(data.message || 'Authentication failed');
                return;
            }
            console.log(data);
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
                      ? '/store/storeName'
                      : '/';
            navigate(navigateTo);
        } catch (err) {
            toast.error(err.message || 'Something went wrong');
        }
    };

    return { onSubmit };
};
