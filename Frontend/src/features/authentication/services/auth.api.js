const BASE_URL = import.meta.env.VITE_SERVER_URL;

export const loginUser = async (data) => {
    const res = await fetch(`${BASE_URL}/user/login`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    return res.json();
};

export const signupUser = async (data) => {
    const res = await fetch(`${BASE_URL}/user/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    return res.json();
};
