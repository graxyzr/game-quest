export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    icon: Icon = null,
    iconPosition = 'left',
    loading = false,
    disabled = false,
    className = '',
    onClick,
    ...rest
}) {
    const variantClass = {
        primary: 'neon-button',
        secondary: 'neon-button-purple',
        ghost: 'icon-button px-4 py-2',
        danger: 'neon-button !border-error/50 !bg-error/10 hover:!bg-error/20 hover:!border-error/80 hover:!shadow-[0_0_16px_rgba(255,68,68,0.4)]',
    }[variant] ?? 'neon-button'

    const sizeClass = {
        sm: 'text-xs px-3 py-1.5',
        md: '',
        lg: 'text-base px-6 py-3',
    }[size] ?? ''

    return (
        <button
            className={`${variantClass} ${sizeClass} ${disabled || loading ? 'opacity-50 pointer-events-none' : ''} ${className}`}
            onClick={onClick}
            disabled={disabled || loading}
            {...rest}
        >
            {/* Spinner */}
            {loading && (
                <span className="inline-block w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin-slow" />
            )}

            {/* Left icon */}
            {!loading && Icon && iconPosition === 'left' && (
                <Icon size={14} className="flex-shrink-0" />
            )}

            {children}

            {/* Right icon */}
            {!loading && Icon && iconPosition === 'right' && (
                <Icon size={14} className="flex-shrink-0" />
            )}
        </button>
    )
}