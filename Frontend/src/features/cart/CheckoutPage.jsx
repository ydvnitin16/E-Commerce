import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import useCartStore from '../../stores/UseCartStore';
import { useNavigate } from 'react-router-dom';
import {useHandleClearCart} from '../../utils/handlerFunctions.js'
import { useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast'


const CheckoutPage = () => {
    const queryClient = useQueryClient()

    const navigate = useNavigate();
    const cart = useCartStore((state) => state.cartIds); // this has the updated cart without out of stock product we use it
    const clearCart = useHandleClearCart()

    const schema = yup.object({
        street: yup.string().trim().required('Street is required'),
        city: yup.string().required('City is required'),
        state: yup.string().required('State is required'),
        country: yup.string().required('Country is required'),
        zipCode: yup.string().required('zip code is required'),
        paymentMethod: yup
            .string()
            .oneOf(
                ['cash on delivery', 'credit/debit cards', 'digital wallets'],
                'Select valid mode of payment'
            )
            .required('Select mode of payment'),
    });

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const error = Object.keys(errors)[0];

    const [formData, setFormData] = useState({
        street: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
        paymentMethod: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (data) => {
        const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/orders`, {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                items: cart,
                address: formData,
                paymentMethod: formData.paymentMethod,
            }),
        });
        const resData = await res.json();
        if (!res.ok) {
            toast.error('Something went wrong')
            return;
        }
        toast.success('Order Placed.')
        clearCart()
        queryClient.invalidateQueries(['orders'])
        navigate('/order')

    };

    return (
        <div className="min-h-screen bg-white p-6 flex flex-col items-center pt-30">
            <section className="text-center my-10 flex flex-col items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                    2
                </div>
                <h1 className="text-3xl font-semibold">Checkout</h1>
            </section>

            <form
                className="w-full max-w-2xl bg-gray-50 p-6 rounded shadow space-y-6"
                onSubmit={handleSubmit(onSubmit)}
            >
                {/* Address Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">
                        Shipping Address
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="street"
                            {...register('street')}
                            value={formData.street}
                            onChange={handleChange}
                            placeholder="Street"
                            className="border px-4 py-2 rounded"
                            required
                        />
                        <input
                            type="text"
                            name="city"
                            {...register('city')}
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="City"
                            className="border px-4 py-2 rounded"
                            required
                        />
                        <input
                            type="text"
                            name="state"
                            {...register('state')}
                            value={formData.state}
                            onChange={handleChange}
                            placeholder="State"
                            className="border px-4 py-2 rounded"
                            required
                        />
                        <input
                            type="text"
                            name="country"
                            {...register('country')}
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="Country"
                            className="border px-4 py-2 rounded"
                            required
                        />
                        <input
                            type="text"
                            name="zipCode"
                            {...register('zipCode')}
                            value={formData.zipCode}
                            onChange={handleChange}
                            placeholder="Zip Code"
                            className="border px-4 py-2 rounded"
                            required
                        />
                        {error && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors[error].message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Payment Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">
                        Payment Method
                    </h2>
                    <div className="space-y-3">
                        {[
                            'cash on delivery',
                            'credit/debit cards',
                            'digital wallets',
                        ].map((method) => (
                            <label
                                key={method}
                                className="flex items-center space-x-3 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    {...register('paymentMethod')}
                                    value={method}
                                    checked={formData.paymentMethod === method}
                                    onChange={handleChange}
                                    className="accent-black"
                                />
                                <span className="capitalize">{method}</span>
                            </label>
                        ))}
                    </div>
                    {errors.paymentMethod?.message && (
                        <p className="text-sm text-red-500 mt-1">
                            {errors.paymentMethod.message}
                        </p>
                    )}
                </div>

                {/* Summary + Submit */}
                <div className="flex flex-col gap-4">
                    <button
                        type="submit"
                        className="bg-black text-white py-3 rounded hover:bg-gray-900 transition cursor-pointer"
                    >
                        Place Order
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutPage;
