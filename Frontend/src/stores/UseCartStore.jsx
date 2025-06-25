import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Only store product id because if store product & product is updated the changes not reflect
const useCartStore = create(
    persist(
        (set, get) => ({
            cartIds: [],
            count: 0,

            addToCart: (productId) => {
                if (!get().cartIds.includes(productId)) {
                    set({
                        cartIds: [...get().cartIds, productId],
                        count: get().count + 1,
                    });
                }
            },

            removeFromCart: (productId) => {
                if (get().cartIds.includes(productId)) {
                    set({
                        cartIds: get().cartIds.filter((id) => id !== productId),
                        count: get().count - 1,
                    });
                }
            },
        }),
        { name: 'cart-storage' }
    )
);

export default useCartStore;
