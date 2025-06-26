import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const categories = [
    'Smartphones',
    'Laptops',
    'Earbuds & Headphones',
    'Smartwatches',
    'Televisions',
    'Cameras',
    'Gaming Devices',
    'Home Appliances',
    'Computer Accessories',
];

const schema = yup.object({
    name: yup.string().trim().required('Product name is required'),
    price: yup
        .number()
        .typeError('Price must be a number')
        .min(0, 'Price cannot be negative')
        .required('Price is required'),
    category: yup
        .string()
        .oneOf(categories, 'Please select a valid category')
        .required('Category is required'),
    image: yup
        .mixed()
        .required('Image is required')
        .test('fileType', 'Only image files allowed', (value) => {
            return value && value.length && value[0]?.type.startsWith('image/');
        }),
    description: yup
        .string()
        .min(10, 'Description must be at least 10 characters')
        .required('Description is required'),
});

const AdminAddProduct = () => {
    const [imagePreview, setImagePreview] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const imageWatch = watch('image');
    const previewImage = imageWatch && imageWatch[0];

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('category', data.category);
        formData.append('description', data.description);
        formData.append('image', data.image[0]); // Image file

        console.log('FormData entries:');
        

        // Example: Send to backend
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/admin/product`, {
                method: 'POST',
                body: formData,
                credentials: 'include', // required if cookie/token used
            });

            const resData = await res.json();
            if (res.ok) {
                alert('Product added successfully!');
                reset();
                setImagePreview(null);
            } else {
                alert(resData?.message || 'Something went wrong!');
            }
        } catch (err) {
            console.error(err);
            alert('Error while uploading product.');
        }
    };

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-blue-600 mb-6">Add New Product</h1>

            <form
                className="space-y-5 bg-white p-6 rounded-xl shadow border"
                onSubmit={handleSubmit(onSubmit)}
            >
                {/* Name */}
                <div>
                    <input
                        type="text"
                        placeholder="Product Name"
                        {...register('name')}
                        className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-sm text-red-500 mt-1">{errors.name?.message}</p>
                </div>

                {/* Price */}
                <div>
                    <input
                        type="number"
                        placeholder="Price"
                        {...register('price')}
                        className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-sm text-red-500 mt-1">{errors.price?.message}</p>
                </div>

                {/* Category */}
                <div>
                    <select
                        {...register('category')}
                        className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Category</option>
                        {categories.map((cat, index) => (
                            <option key={index} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                    <p className="text-sm text-red-500 mt-1">{errors.category?.message}</p>
                </div>

                {/* Image */}
                <div>
                    <label className="block mb-1 font-medium">Product Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        {...register('image')}
                        onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                                setImagePreview(URL.createObjectURL(file));
                            }
                        }}
                        className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-sm text-red-500 mt-1">{errors.image?.message}</p>
                    {imagePreview && (
                        <img
                            src={imagePreview}
                            alt="Preview"
                            className="mt-3 w-32 h-32 object-cover rounded border"
                        />
                    )}
                </div>

                {/* Description */}
                <div>
                    <textarea
                        {...register('description')}
                        placeholder="Description"
                        className="w-full border px-4 py-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={4}
                    />
                    <p className="text-sm text-red-500 mt-1">{errors.description?.message}</p>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold transition"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AdminAddProduct;
