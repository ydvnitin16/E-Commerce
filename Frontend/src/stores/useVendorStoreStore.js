import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useVendorStoreStore = create(
    persist((set, get) => ({
        stores: [],
        currentStore: {},
        setStores: (stores) => {
            set({ stores: stores });
        },
        setCurrentStore: (storeSlug) => {
            set({
                currentStore: get().stores.find((s) => s.slug === storeSlug),
            });
        },
    })),
    { name: 'shopcart-store-storage' },
);

export default useVendorStoreStore;
