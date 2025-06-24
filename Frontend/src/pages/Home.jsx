import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import heroImage from '../assets/Hero.jpg';
import headphoneBanner from '../assets/Headphone-Banner.jpg';
import phoneBanner from '../assets/Phone-Banner.jpg';
import laptopBanner from '../assets/Laptop-Banner.jpg';
import phoneImage from '../assets/PhoneImage.webp';
import laptopImage from '../assets/LaptopImage.webp';
import earbudsImage from '../assets/EarbudImage.webp';
import tvImage from '../assets/TVImage.png';
import gamingDeviceImage from '../assets/GamingDeviceImage.png';
import homeApplianceImage from '../assets/HomeAppImage.jpg';
import cameraImage from '../assets/CameraImage.png';
import smartwatchImage from '../assets/Watch.png';
import computerAccessoriesImage from '../assets/AccessoriesImage.webp';
import { UseHomeProducts } from '../stores/UseHomeProduct';
import ProductCard from '../components/ProductCard.jsx';

const Home = () => {
    const navigate = useNavigate();

    const homeLatestProducts = UseHomeProducts(
        (state) => state.homeLatestProducts
    );
    const homeBestSellerProducts = UseHomeProducts(
        (state) => state.homeBestSellerProducts
    );
    const setHomeProducts = UseHomeProducts((state) => state.setHomeProducts);
    const loaded = UseHomeProducts((state) => state.loaded);

    useEffect(() => {
        setHomeProducts();
    }, []);

    const categories = [
        { name: 'Laptop', slug: 'Laptops', image: laptopImage },
        { name: 'Smartphones', slug: 'Smartphones', image: phoneImage },
        { name: 'Camera', slug: 'Cameras', image: cameraImage },
        { name: 'SmartWatchs', slug: 'Smartwatches', image: smartwatchImage },
        { name: 'Earbuds', slug: 'Earbuds & Headphones', image: earbudsImage },
        { name: 'TV', slug: 'Televisions', image: tvImage },
        {
            name: 'Gaming Devices',
            slug: 'Gaming Devices',
            image: gamingDeviceImage,
        },
        {
            name: 'Home Appliances',
            slug: 'Home Appliances',
            image: homeApplianceImage,
        },
        {
            name: 'Computer Accessories',
            slug: 'Computer Accessories',
            image: computerAccessoriesImage,
        },
    ];

    return (
        <main>
            {/* Hero Section */}
            <section
                className="bg-cover bg-center h-screen flex items-end p-1 justify-center text-white"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="bg-black bg-opacity-50 p-8 rounded-md sm:flex justify-center items-center text-center gap-4">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Welcome to TechNest
                        </h1>
                        <p className="text-lg md:text-xl mb-4 ">
                            Discover the best products at unbeatable prices.
                        </p>
                    </div>
                    <button
                        onClick={() => navigate('/shop')}
                        className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition cursor-pointer"
                    >
                        Shop Now
                    </button>
                </div>
            </section>

            <div className="w-full bg-[#f9f9f9] py-8 px-3">
                <div className="flex items-center justify-center gap-8 overflow-x-auto overflow-y-hidden px-4">
                    {categories.map((item) => (
                        <div
                            key={item.name}
                            className="flex flex-col items-center text-center cursor-pointer transition-transform hover:scale-105"
                            onClick={() =>
                                navigate(`/products?category=${item.slug}`)
                            }
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-20 h-20 object-contain mb-2"
                            />
                            <span className="text-sm font-medium text-black">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* New Products Placeholder */}
            <section className=" py-15 md:px-20 px-5 mx-auto">
                <h2 className="text-3xl font-semibold mb-8">New Arrivals</h2>
                <div className='flex overflow-x-scroll'>
                    <ProductCard products={homeLatestProducts} />
                </div>
                {/* You can use a <ProductCard /> component here later */}
            </section>

            <section>
                <h1 className="text-3xl font-semibold md:px-20 px-5">
                    Shop Collection
                </h1>
                <div className="flex flex-col lg:flex-row gap-4 px-4 py-8">
                    {/* Left: Large Category Block */}
                    <div className="w-full lg:w-1/2 overflow-hidden relative group h-[70vh]">
                        <img
                            src={laptopBanner}
                            alt="Laptops"
                            className=" w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <h2 className="text-white text-3xl font-semibold">
                                Laptops
                            </h2>
                            <button
                                onClick={() => navigate('/category/laptops')}
                                className="mt-2 text-white underline underline-offset-4 hover:text-gray-200 transition"
                            >
                                Shop
                            </button>
                        </div>
                    </div>

                    {/* Right: Two Smaller Blocks */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-4">
                        {/* Top Right */}
                        <div className="relative h-[35vh] group overflow-hidden rounded-bl-2xl rounded-tr-2xl">
                            <img
                                src={phoneBanner}
                                alt="Phones"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                <h3 className="text-white text-2xl font-medium">
                                    Smartphones
                                </h3>
                                <button
                                    onClick={() => navigate('/category/phones')}
                                    className="mt-1 text-white underline underline-offset-4 hover:text-gray-200 transition"
                                >
                                    Shop
                                </button>
                            </div>
                        </div>

                        {/* Bottom Right */}
                        <div className="relative h-[35vh] group overflow-hidden rounded-tl-2xl rounded-br-2xl">
                            <img
                                src={headphoneBanner}
                                alt="Accessories"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                <h3 className="text-white text-2xl font-medium">
                                    Accessories
                                </h3>
                                <button
                                    onClick={() =>
                                        navigate('/category/accessories')
                                    }
                                    className="mt-1 text-white underline underline-offset-4 hover:text-gray-200 transition"
                                >
                                    Shop
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-15 md:px-20 px-5 mx-auto">
                <h2 className="text-3xl font-semibold mb-8">
                    Best Seller Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                   <ProductCard products={homeBestSellerProducts} />
                </div>
            </section> 

            <section className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center px-6 py-8  border-gray-200">
                <div className="p-4 border rounded-lg">
                    <img
                        src="/icons/shipping.svg"
                        className="mx-auto mb-2 w-6"
                    />
                    <h3 className="font-semibold text-sm">Free Shipping</h3>
                    <p className="text-xs text-gray-500">Orders above $200</p>
                </div>
                <div className="p-4 border rounded-lg">
                    <img
                        src="/icons/moneyback.svg"
                        className="mx-auto mb-2 w-6"
                    />
                    <h3 className="font-semibold text-sm">Money-back</h3>
                    <p className="text-xs text-gray-500">30-day guarantee</p>
                </div>
                <div className="p-4 border rounded-lg">
                    <img src="/icons/secure.svg" className="mx-auto mb-2 w-6" />
                    <h3 className="font-semibold text-sm">Secure Payments</h3>
                    <p className="text-xs text-gray-500">Secured by Stripe</p>
                </div>
                <div className="p-4 border rounded-lg">
                    <img
                        src="/icons/support.svg"
                        className="mx-auto mb-2 w-6"
                    />
                    <h3 className="font-semibold text-sm">24/7 Support</h3>
                    <p className="text-xs text-gray-500">
                        Phone & Email Support
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Home;
