const AuthWrapper = ({ children }) => {
    return (
        <div className="min-h-screen flex bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
            {/* LEFT */}
            <div className="hidden lg:flex flex-1 items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-12">
                <div className="max-w-md text-black-100">
                    <h2 className="text-3xl font-semibold tracking-tight mb-4">
                        Built for modern teams
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400">
                        Manage products, orders, and growth — without
                        distractions.
                    </p>
                </div>
            </div>
            {/* RIGHT */}
            {children}
        </div>
    );
};

export default AuthWrapper;
