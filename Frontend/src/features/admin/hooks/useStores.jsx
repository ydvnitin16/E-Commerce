import { useEffect, useState } from 'react';
import { fetchStores } from '../services/store.api.js';

const useStores = ({ status }) => {
    const [stores, setStores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const loadStores = async () => {
            try {
                setLoading(true);
                const data = await fetchStores(
                    {
                        status,
                    },
                    controller.signal
                );
                setStores(data.stores);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        };
        loadStores();

        return () => {
            controller.abort();
        };
    }, [status]);

    return { stores, loading, error };
};

export default useStores;
