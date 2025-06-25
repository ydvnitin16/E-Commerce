import useCartStore from '../stores/UseCartStore.jsx';
import { useQueryClient } from '@tanstack/react-query';

const useHandleAddToCart = () => {
    const queryClient = useQueryClient()
    const addToCart = useCartStore((state) => state.addToCart);
    const handleAddToCart = (productId) => {
        if (productId) {
            addToCart(productId);
            queryClient.invalidateQueries({ queryKey: ['cart-products']})
        }
    };
    return handleAddToCart
};

const useHandleRemoveFromCart = () => {
    const queryClient = useQueryClient()
    const removeFromCart = useCartStore((state) => state.removeFromCart);

    const handleRemoveFromCart = (productId) => {
        if (productId) {
            removeFromCart(productId);
            queryClient.invalidateQueries({ queryKey: ['cart-products']})
        }
    };
    return handleRemoveFromCart
};

export { useHandleAddToCart, useHandleRemoveFromCart };
