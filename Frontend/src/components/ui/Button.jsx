import clsx from 'clsx';

const variants = {
    primary:
        'bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900',
    secondary:
        'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100',
    ghost: 'bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800',
    destructive: 'bg-red-600 text-white hover:bg-red-500',
};

const sizes = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-9 px-4 text-sm',
    lg: 'h-10 px-6 text-sm',
};

const Button = ({
    variant = 'primary',
    size = 'md',
    className,
    disabled,
    ...props
}) => {
    return (
        <button
            className={clsx(
                'inline-flex items-center justify-center rounded-lg font-medium transition',
                'focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100',
                'disabled:opacity-80 disabled:pointer-events-none',
                variants[variant],
                sizes[size],
                className
            )}
            disabled={disabled}
            {...props}
        />
    );
};

export default Button;
