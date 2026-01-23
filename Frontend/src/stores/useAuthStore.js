import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const EXPIRY_TIME = 30 * 24 * 60 * 60 * 1000; // 30 days

const useAuthStore = create(
    persist(
        (set, get) => ({
            currentUsr: null,
            sessionStatedAt: null,

            setAuthUser: (user) => {
                set({
                    currentUser: user,
                    sessionStartedAt: Date.now(),
                });
            },

            clearAuth: () => {
                set({
                    currentUser: null,
                    sessionStartedAt: null,
                });
            },

            hasSessionExpired: () => {
                const startedAt = get().sessionStartedAt;
                if (!startedAt) return true;
                return Date.now() - startedAt > EXPIRY_TIME;
            },

            isAuthenticated: () => {
                const { currentUser, hasSessionExpired } = get();
                return !!currentUser && !hasSessionExpired();
            },
        }),
        { name: 'shopcart-auth-storage' },
    ),
);

export default useAuthStore;
