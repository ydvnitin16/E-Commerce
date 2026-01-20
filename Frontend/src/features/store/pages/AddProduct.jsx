import React from 'react';
import { CloudUpload } from 'lucide-react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { useParams } from 'react-router-dom';

const AddProduct = () => {
    const {storeSlug} = useParams();

    return (
        <div className="min-h-screen px-2 md:px-5 py-12">
            <div className="mx-auto max-w-4xl">
                <div className="mb-10">
                    <h1 className="text-3xl font-semibold text-gray-900">
                        Add Product
                    </h1>
                    <p className="mt-2 text-sm text-gray-500">
                        Add basic information for your new product.
                    </p>
                </div>

                <div className="space-y-10">
                    <Input
                        label={'Product Name'}
                        placeholder={'Apple iPhone 15 Pro'}
                    />

                    {/* Images Input for product images */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Product Images
                        </label>

                        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-5">
                            {[1, 2, 3, 4, 5].map((_, index) => (
                                <label
                                    key={index}
                                    className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-lg border  border-zinc-200 hover:border-zinc-300"
                                >
                                    <CloudUpload className="h-10 w-10 text-gray-400" />
                                    <span className="mt-2 text-xs text-gray-500">
                                        Upload
                                    </span>
                                    <input
                                        id={`image-${index}`}
                                        type="file"
                                        className="hidden"
                                    />
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            rows="5"
                            placeholder="Write a short description about the product..."
                            className="mt-3 w-full resize-none rounded-md border border-gray-300 px-3 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-black focus:outline-none"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <Input
                            label="Price"
                            placeholder="₹ 999"
                            type="number"
                        />
                        <Input label="MRP" placeholder="₹ 1299" type="number" />
                    </div>

                    <div className="pt-6">
                        <Button>Add Product</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
