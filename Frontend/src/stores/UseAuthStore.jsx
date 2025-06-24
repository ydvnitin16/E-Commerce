import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const EXPIRY_TIME =  3 * 24 * 60 * 60 * 1000; // 3 days

const useAuthStore = create(
    persist(
        (set, get) => ({
            user: null,
            loginTime: null,

            login: (userInfo) => {
                set({ user: userInfo, loginTime: Date.now() });
            },

            logout: () => {
                set({ user: null, loginTime: null });
            },

            isExpired: () => {
                const loginTime = get().loginTime;
                if (!loginTime) return true;
                return Date.now() - loginTime > EXPIRY_TIME;
            },
        }),
        { name: 'auth-storage' }
    )
);

export { useAuthStore };
