import React from 'react';

const InlineLoader = ({ content = 'Loading...' }) => {
    return (
        <div className="flex items-center gap-2 text-sm text-zinc-600">
            <span className="h-3 w-3 border-2 border-zinc-300 border-t-zinc-900 rounded-full animate-spin" />
            {content}
        </div>
    );
};

export default InlineLoader;
