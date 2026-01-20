import { ChevronUp, Store, Plus } from 'lucide-react';
import React, { useState } from 'react';
import useVendorStoreStore from '@/stores/useVendorStoreStore';
import { useNavigate } from 'react-router-dom';

const StoresList = () => {
    const [open, setOpen] = useState(false);
    const { stores, currentStore, setCurrentStore } = useVendorStoreStore();
    const navigate = useNavigate();

    const handleStoreChange = (storeSlug) => {
        navigate(`/store/${storeSlug}/dashboard`);
        setCurrentStore(storeSlug);
        setOpen(false);
    };

    if (!stores || stores.length === 0) return null;

    return (
        <div className="p-3">
            {/* Active store */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between gap-3 rounded-md px-3 py-2 hover:bg-zinc-100 transition cursor-pointer"
            >
                <div className="flex items-center gap-3 min-w-0">
                    <div className="h-8 w-8 rounded-md bg-zinc-900 text-white flex-shrink-0 flex items-center justify-center">
                        <Store size={16} />
                    </div>
                    <div className="text-left min-w-0">
                        <p className="text-sm font-medium leading-none truncate">
                            {currentStore?.name || 'Select Store'}
                        </p>
                        <span className="text-xs text-zinc-500">
                            @{currentStore.slug}
                        </span>
                    </div>
                </div>

                <ChevronUp
                    size={16}
                    className={`flex-shrink-0 transition-transform ${
                        open ? 'rotate-180' : ''
                    }`}
                />
            </button>

            {/* Store list */}
            {open && (
                <div className="mt-2 space-y-1">
                    {stores.map((store) => (
                        <button
                            key={store._id}
                            onClick={() => handleStoreChange(store.slug)}
                            className={`w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm transition cursor-pointer ${
                                currentStore?._id === store._id
                                    ? 'bg-zinc-100 font-medium'
                                    : 'hover:bg-zinc-100'
                            }`}
                        >
                            <div className="h-7 w-7 rounded-md bg-zinc-200 flex items-center justify-center flex-shrink-0">
                                <Store size={14} />
                            </div>
                            <div className="text-left min-w-0">
                                <p className="text-sm font-medium leading-none truncate">
                                    {store?.name || 'Select Store'}
                                </p>
                                <span className="text-xs text-zinc-500">
                                    @{store.slug}
                                </span>
                            </div>
                        </button>
                    ))}

                    {/* Create new store */}
                    <button className="w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-100 transition cursor-pointer">
                        <div className="h-7 w-7 rounded-md border border-dashed border-zinc-300 flex items-center justify-center flex-shrink-0">
                            <Plus size={14} />
                        </div>
                        <span>Create new store</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default StoresList;
