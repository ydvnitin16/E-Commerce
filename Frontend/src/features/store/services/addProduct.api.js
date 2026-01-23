const BASE_URL = import.meta.env.VITE_SERVER_URL;

export const addProduct = async (storeSlug, data) => {
    const res = await fetch(`${BASE_URL}/${storeSlug}/create-product`, {
        method: 'POST',
        credentials: 'include',
        body: data,
    });
    
    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Failed to fetch stores');
    }
    return await res.json();
};
