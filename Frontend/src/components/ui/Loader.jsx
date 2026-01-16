import React from 'react';

const Loader = () => {
    return (
        <div className="flex items-center justify-center w-full h-screen">
            <div className="relative h-10 w-10">
                {/* Background ring */}
                <div className="absolute inset-0 rounded-full border-4 border-zinc-200" />

                {/* Animated ring */}
                <div className="absolute inset-0 rounded-full border-4 border-zinc-900 border-t-transparent animate-spin" />
            </div>
        </div>
    );
};

export default Loader;
