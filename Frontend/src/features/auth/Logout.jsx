import React from 'react';
import { useAuthStore } from '../../stores/UseAuthStore.jsx';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Logout = () => {
    const navigate = useNavigate();
    const logout = useAuthStore((state) => state.logout);
    const userLogout = async () => {
        const res = await fetch(
            `${import.meta.env.VITE_SERVER_URL}/user/logout`,
            {
                method: 'DELETE',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
            }
        );
        const data = await res.json();
        if (res.ok) {
            logout();
            navigate('/');
            toast.success('Logout Successful!');
            return;
        }
        toast.error('Failed to Logout')
    };
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 mx-4">
                <h2 className="text-2xl font-bold mb-4">Logout?</h2>
                <p className="text-gray-600 font-medium mb-6">
                    Do you want to logout
                </p>
                <div className="flex justify-end space-x-3">
                    <button
                        onClick={() => navigate(-1)}
                        className="px-4 py-2 rounded bg-gray-300 text-gray-800 hover:bg-gray-400 cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            userLogout();
                        }}
                        className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 cursor-pointer"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Logout;
