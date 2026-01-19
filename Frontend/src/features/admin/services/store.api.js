const BASE_URL = import.meta.env.VITE_SERVER_URL;

export const fetchStores = async (params = {}, signal) => {
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`${BASE_URL}/admin/stores?${query}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        signal,
    });
    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Failed to fetch stores');
    }
    return await res.json();
};

export const updateStoreStatus = async (storeId, status) => {
    const res = await fetch(`${BASE_URL}/admin/store/${storeId}/status`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ status: status }),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Failed to fetch stores');
    }
    return await res.json();
};
