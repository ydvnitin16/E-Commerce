import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/product.api';

const useStoreProducts = ({ storeSlug }) => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [total, setTotal] = useState(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                setLoading(true);
                const data = await fetchProducts({ storeSlug });
                setProducts(data.products);
                setTotal(data.total);
            } catch (err) {
                console.log(err.message);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadProducts();
    }, [storeSlug]);

    return { loading, error, products, total };
};

export default useStoreProducts;
