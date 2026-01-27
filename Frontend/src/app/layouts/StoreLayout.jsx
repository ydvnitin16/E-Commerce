import AppShell from "@/components/layout/AppShell";
import StoresList from "@/features/store/components/StoresList";
import useVendorStoreStore from "@/stores/useVendorStoreStore";
import {
    LucideHome,
    LucideSquarePlus,
    ShoppingBag,
    SquarePen,
} from "lucide-react";
import React, { useEffect } from "react";
import { Outlet, useNavigate, useParams, useLocation } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_SERVER_URL;

const StoreLayout = () => {
    const { storeSlug } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const { setStores, setCurrentStore, currentStore } = useVendorStoreStore();

    const NAV_LINKS = [
        {
            label: "Dashboard",
            slug: `/store/${storeSlug}/dashboard`,
            icon: <LucideHome size={18} />,
        },
        {
            label: "Add product",
            slug: `/store/${storeSlug}/add-product`,
            icon: <LucideSquarePlus size={18} />,
        },
        {
            label: "Manage products",
            slug: `/store/${storeSlug}/manage-products`,
            icon: <SquarePen size={18} />,
        },
    ];

    const PANEL_DETAILS = {
        label: "STORE PANEL",
        icon: <ShoppingBag size={18} />,
    };

    // Fetch user's (VENDOR) store for the vendor routes
    useEffect(() => {
        const loadStores = async () => {
            const res = await fetch(`${BASE_URL}/store/user-stores`, {
                method: "GET",
                credentials: "include",
            });
            const data = await res.json();

            // store all the stores in the global storage & navigate
            setStores(data.stores);
            const storeSlug = currentStore?.slug || data.stores[0].slug || "";

            setCurrentStore(storeSlug);

            // Only navigate to dashboard if not already on a valid store route
            const isStoreRoute = location.pathname.includes(
                `/store/${storeSlug}/`,
            );
            if (!isStoreRoute) {
                navigate(`/store/${storeSlug}/dashboard`);
            }
        };
        loadStores();
    }, []);

    return (
        <AppShell
            navLinks={NAV_LINKS}
            panelDetails={PANEL_DETAILS}
            Footer={<StoresList />}
        >
            <Outlet />
        </AppShell>
    );
};

export default StoreLayout;
