import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import { useHandleAddToCart } from '../utils/handlerFunctions.js';
import useCartStore from '../stores/UseCartStore.jsx';

const ProductCard = ({ products }) => {
    const navigate = useNavigate();
    const handleAddToCart = useHandleAddToCart();

    const cartIds = useCartStore((state) => state.cartIds);

    return (
        <>
            {products &&
                products.map((product) => (
                    <div
                        onClick={() => navigate(`/product/${product._id}`)}
                        key={product._id}
                        className="w-64 flex-shrink-0 relative bg-white rounded-xl shadow-md overflow-hidden m-2 cursor-pointer"
                    >
                        <div
                            className="relative h-40 bg-cover bg-gray-200 bg-center group"
                            style={{
                                backgroundImage: `url(${product.image})`,
                            }}
                        >
                            {((new Date(product.createdAt) - new Date()) /
                                1000) *
                                60 *
                                60 *
                                24 <
                                7 && (
                                <span className="absolute top-2 left-2 rounded-3xl  px-2 py-0.5 text-white backdrop-blur-sm bg-black/50">
                                    New
                                </span>
                            )}
                            <FontAwesomeIcon
                                icon={faHeart}
                                className="absolute top-2 right-2 text-white text-xl z-10 backdrop-blur-sm bg-white/20 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-30"
                            />
                            {product.inStock ? (
                                cartIds.includes(product._id) ? (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                        }}
                                        className="absolute bottom-2 left-1/2 -translate-x-1/2 text-lg w-[90%] cursor-pointer bg-black text-white px-4 py-1 rounded-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    >
                                        Added
                                    </button>
                                ) : (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleAddToCart(product._id);
                                        }}
                                        className="absolute bottom-2 left-1/2 -translate-x-1/2 text-lg w-[90%] cursor-pointer bg-black text-white px-4 py-1 rounded-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    >
                                        Add to cart
                                    </button>
                                )
                            ) : (
                                <button
                                    onClick={(e) => e.stopPropagation()}
                                    className="absolute bottom-2 left-1/2 -translate-x-1/2 text-lg w-[90%] cursor-pointer bg-black text-white px-4 py-1 rounded-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                >
                                    Out of Stock
                                </button>
                            )}
                        </div>

                        <div className="p-4 text-sm">
                            <p className="text-gray-500 mb-1">
                                ★ 4.5 • ({product.itemSold})
                            </p>
                            <strong className="block text-base text-gray-900 mb-1">
                                {product.name}
                            </strong>
                            <p className="text-green-600 font-semibold">
                                ₹{product.price}
                            </p>
                        </div>
                    </div>
                ))}
        </>
    );
};

export default ProductCard;
