import useCartStore from '../../stores/UseCartStore.jsx';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useHandleRemoveFromCart } from '../../utils/handlerFunctions.js';
import { useHandleUpdateQuantity } from '../../utils/handlerFunctions.js';
import toast from 'react-hot-toast';
import Loading from '../../components/Loading.jsx';
import ErrorModal from '../../components/ErrorModal.jsx';

const CartPage = () => {
    const navigate = useNavigate();
    const cartIds = useCartStore((state) => state.cartIds); // contains both id and qty
    const productIds = cartIds.map((item) => item.productId); // contains only ids
    const handleRemoveFromCart = useHandleRemoveFromCart();
    const handleUpdateQuantity = useHandleUpdateQuantity();

    function calcTotalPrice(cartIds, products) {
        if (!Array.isArray(products) || products.length === 0) return 0;
        let totalPrice = 0;

        for (const item of cartIds) {
            const product = products.find(
                (product) => product._id === item.productId
            );
            if (product) {
                totalPrice += product.price * item.quantity;
            }
        }
        return totalPrice;
    }

    const {
        data: products,
        isLoading,
        error,
        isSuccess,
    } = useQuery({
        queryKey: ['cart-products'],
        queryFn: async () => {
            const URL = `${import.meta.env.VITE_SERVER_URL}/products/cart`;
            const res = await fetch(URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ids: productIds }),
            });
            const data = await res.json();
            return data.products;
        },
        enabled: productIds.length > 0,
        staleTime: 1000 * 60 * 5,
    });
    const totalPrice = products ? calcTotalPrice(cartIds, products) : 0;

    function checkout() {
        let outOfStock = false;
        if(!products || !products.length > 0){
            return toast.error('Cart it empty')
        }
        products.forEach((product) => {
            if (!product.inStock) {
                outOfStock = true;
                return;
            }
        });
        if (outOfStock) {
            toast.error('Please remove out of stock items')
            return;
        }
        navigate('/cart/checkout');
    }

    return (
        <div className="min-h-screen bg-white flex flex-col items-center pt-30">
            {/* Title & Steps */}
            <section className="text-center my-10 flex flex-col items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                    1
                </div>
                <h1 className="text-3xl font-semibold">Shopping Cart</h1>
            </section>

            {/* Main Section */}
            <main className="flex flex-col justify-center px-4 md:px-10 gap-10 sm:w-xl md:w-2xl lg:w-4xl">
                {/* Product List */}
                <div className="flex-1">
                    <div className="space-y-6">
                        {isLoading && <Loading /> || products ?
                            products.map((product, index) => (
                                <div
                                    key={product._id}
                                    className="flex gap-4 items-start border-b pb-4"
                                >
                                    <img
                                        src={product.image}
                                        alt="Product"
                                        className="w-16 h-16 object-cover"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-semibold">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm text-gray-500"></p>
                                        <button
                                            onClick={() =>
                                                handleRemoveFromCart(
                                                    product._id
                                                )
                                            }
                                            className="text-sm text-gray-500 mt-1 cursor-pointer"
                                        >
                                            ✖ Remove
                                        </button>
                                    </div>
                                    {product.inStock ? (
                                        <>
                                            {' '}
                                            <input
                                                className="border p-1 font-medium w-15"
                                                type="number"
                                                min={1}
                                                value={
                                                    cartIds.find(
                                                        (item) =>
                                                            item.productId ===
                                                            product._id
                                                    )?.quantity || 1
                                                }
                                                onChange={(e) =>
                                                    handleUpdateQuantity(
                                                        product._id,
                                                        Number(e.target.value)
                                                    )
                                                }
                                            />
                                            <div className="text-right min-w-[60px]">
                                                <p className="font-semibold">
                                                    ₹ {product.price}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    ₹{' '}
                                                    {(cartIds.find(
                                                        (item) =>
                                                            item.productId ===
                                                            product._id
                                                    )?.quantity || 1) *
                                                        product.price}
                                                </p>
                                            </div>
                                        </>
                                    ) : (
                                        <p className="font-bold text-red-600 text-lg">
                                            Out of Stock
                                        </p>
                                    )}
                                </div>
                            )) : <ErrorModal msg='Cart is Empty' />}
                    </div>

                    {/* Coupon */}
                    <div className="mt-6">
                        <h4 className="font-semibold">Have a coupon?</h4>
                        <p className="text-sm text-gray-500">
                            Add your code for an instant cart discount
                        </p>
                        <div className="flex mt-2 max-w-md">
                            <input
                                className="border px-4 py-2 flex-1"
                                placeholder="Coupon Code"
                            />
                            <button className="bg-black text-white px-4 py-2 cursor-pointer">
                                Apply
                            </button>
                        </div>
                    </div>
                </div>

                {/* Cart Summary */}
                <div className="border p-6 rounded-md w-full max-w-md mx-auto bg-gray-50 shadow-sm">
                    <h4 className="font-semibold text-lg mb-4 text-center">
                        Cart Summary
                    </h4>
                    {isSuccess && (
                        <>
                            <div className="flex justify-between mb-2 text-sm text-gray-700">
                                <span>Subtotal</span>
                                <span>₹ {totalPrice}</span>
                            </div>
                            <div className="flex justify-between font-semibold text-base mb-4">
                                <span>Total</span>
                                <span>₹ {totalPrice}</span>
                            </div>
                        </>
                    )}

                    <button
                        onClick={() => {
                            checkout();
                        }}
                        className="w-full bg-black text-white py-2 rounded hover:bg-gray-900 transition cursor-pointer"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </main>
        </div>
    );
};

export default CartPage;
