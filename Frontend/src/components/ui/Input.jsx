import clsx from 'clsx';

const Input = ({ label, error, className, ...props }) => {
    return (
        <div className="grid space-y-3">
            {label && (
                <label className="text-sm font-medium text-zinc-700">
                    {label}
                </label>
            )}

            <input
                className={clsx(
                    'w-full rounded-lg border bg-transparent px-4 py-3 text-sm',
                    'border-zinc-200',
                    'placeholder:text-zinc-400',
                    'focus:outline-none focus:ring-1 focus:ring-zinc-300',
                    error && 'border-red-500 focus:ring-red-500',
                    className,
                )}
                {...props}
            />

            {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
    );
};

export default Input;
