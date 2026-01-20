const BASE_URL = import.meta.env.VITE_SERVER_URL;

export const addProduct = async (data) => {
    const storeSlug = '';
    const res = await fetch(`${BASE_URL}/${storeSlug}/create-product`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    return res.json();
};
