import useVendorStoreStore from "@/stores/useVendorStoreStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_SERVER_URL;

const StoreRedirect = () => {
    const navigate = useNavigate();
    const { setStores, setCurrentStore } = useVendorStoreStore();

    useEffect(() => {
        const loadStores = async () => {
            try {
                const res = await fetch(`${BASE_URL}/store/user-stores`, {
                    method: "GET",
                    credentials: "include",
                });

                const data = await res.json();
                if (!res.ok) {
                    throw new Error(data.message || "Failed to fetch stores");
                }
                const firstStore = data.stores?.[0];
                if (!firstStore) return;

                setStores(data.stores);
                setCurrentStore(firstStore.slug);

                navigate(`/store/${firstStore.slug}/dashboard`, {
                    replace: true,
                });
            } catch (err) {
                console.error("Error fetching user stores:", err);
            }
        };

        loadStores();
    }, [navigate, setStores, setCurrentStore]);

    return null;
};

export default StoreRedirect;
