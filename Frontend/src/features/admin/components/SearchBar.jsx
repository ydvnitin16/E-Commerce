const SearchBar = () => {
    return (
        <div className="p-5 flex items-center justify-between border-b border-zinc-100">
            <input
                className="w-full max-w-md px-4 py-2 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:border-2 focus:border-zinc-300"
                placeholder="Search stores, owners, or emails..."
            />
        </div>
    );
};

export default SearchBar;
