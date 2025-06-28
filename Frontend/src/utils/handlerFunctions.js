import toast from 'react-hot-toast';
import useCartStore from '../stores/UseCartStore.jsx';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const useHandleAddToCart = () => {
    const queryClient = useQueryClient();
    const addToCart = useCartStore((state) => state.addToCart);
    const handleAddToCart = (productId, quantity = 1) => {
        if (productId) {
            addToCart(productId, quantity);
            queryClient.invalidateQueries({ queryKey: ['cart-products'] });
            toast.success('Product Added')
        }
    };
    return handleAddToCart;
};

const useHandleRemoveFromCart = () => {
    const queryClient = useQueryClient();
    const removeFromCart = useCartStore((state) => state.removeFromCart);

    const handleRemoveFromCart = (productId) => {
        if (productId) {
            removeFromCart(productId);
            queryClient.invalidateQueries({ queryKey: ['cart-products'] });
            toast.success('Product Removed')
        }
    };
    return handleRemoveFromCart;
};

const useHandleUpdateQuantity = () => {
    const queryClient = useQueryClient();
    const updateQuantity = useCartStore((state) => state.updateQuantity);

    const handleUpdateQuantity = (productId, quantity = 1) => {
        if (productId && quantity) {
            updateQuantity(productId, quantity);
            queryClient.invalidateQueries({ queryKey: ['cart-products'] });
            toast.success('Product Quantity Updated')
        }
    };
    return handleUpdateQuantity
};
const useHandleClearCart = () => {
    const queryClient = useQueryClient();
    const clearCart = useCartStore((state) => state.clearCart);

    const handleClearCart = () => {
            clearCart();
            queryClient.invalidateQueries({ queryKey: ['cart-products'] });
    };
    return handleClearCart
};

export { useHandleAddToCart, useHandleRemoveFromCart, useHandleUpdateQuantity, useHandleClearCart };
