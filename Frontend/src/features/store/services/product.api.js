const BASE_URL = import.meta.env.VITE_SERVER_URL;

export const addProduct = async (storeSlug, data) => {
    const res = await fetch(`${BASE_URL}/${storeSlug}/create-product`, {
        method: "POST",
        credentials: "include",
        body: data,
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to add product");
    }
    return await res.json();
};

export const fetchProducts = async ({ storeSlug }) => {
    const res = await fetch(`${BASE_URL}/${storeSlug}/products`, {
        method: "GET",
        credentials: "include",
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || `Failed to fetch store's products`);
    }
    return await res.json();
};

export const updateProductStock = async ({ storeSlug, productId, inStock }) => {
    const res = await fetch(
        `${BASE_URL}/${storeSlug}/product/${productId}/update`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ inStock }),
        },
    );
    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to update stock");
    }
    return await res.json();
};
