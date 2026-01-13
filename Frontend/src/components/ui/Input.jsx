import clsx from 'clsx';

const Input = ({ label, error, className, ...props }) => {
    return (
        <div className="space-y-1">
            {label && (
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    {label}
                </label>
            )}
            <input
                className={clsx(
                    'w-full rounded-lg border bg-transparent px-4 py-3 text-sm',
                    'border-zinc-200 dark:border-zinc-800',
                    'placeholder:text-zinc-400',
                    'focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100',
                    error && 'border-red-500 focus:ring-red-500',
                    className
                )}
                {...props}
            />

            {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
    );
};

export default Input;
