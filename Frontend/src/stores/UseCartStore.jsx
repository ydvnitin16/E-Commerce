import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Only store product id because if store product & product is updated the changes not reflect
const useCartStore = create(
    persist(
        (set, get) => ({
            cartIds: [],
            count: 0,

            addToCart: (productId, quantity = 1) => {
                if (
                    !get().cartIds.some((item) => item.productId === productId)
                ) {
                    set({
                        cartIds: [
                            ...get().cartIds,
                            { productId: productId, quantity: quantity },
                        ],
                        count: get().count + 1,
                    });
                }
            },

            removeFromCart: (productId) => {
                if (
                    get().cartIds.some((item) => item.productId === productId)
                ) {
                    set({
                        cartIds: get().cartIds.filter(
                            (item) => item.productId !== productId
                        ),
                        count: get().count - 1,
                    });
                }
            },
            updateQuantity: (productId, quantity) => {
                if (
                    get().cartIds.some((item) => item.productId === productId)
                ) {
                    set({
                        cartIds: get().cartIds.map((item) =>
                            item.productId === productId
                                ? { productId, quantity }
                                : item
                        ),
                        count: get().count,
                    });
                }
            },
            clearCart: () => {
                set({cartIds: [], count: 0})
            }
        }),
        { name: 'cart-storage' }
    )
);

export default useCartStore;
