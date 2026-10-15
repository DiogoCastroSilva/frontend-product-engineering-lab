'use client';

import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual intent of the button. */
  variant?: ButtonVariant;
  /** Controls the button's height and horizontal padding. */
  size?: ButtonSize;
  /** Shows a compact progress indicator and prevents duplicate interaction. */
  loading?: boolean;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-primary)] text-[var(--color-surface)] enabled:not-aria-disabled:hover:bg-[var(--color-primary-hover)] enabled:not-aria-disabled:active:bg-[var(--color-primary-active)]',
  secondary:
    'border border-[var(--color-primary)] bg-[var(--color-surface)] text-[var(--color-primary)] enabled:not-aria-disabled:hover:bg-[var(--color-primary-subtle)] enabled:not-aria-disabled:hover:text-[var(--color-primary)]',
  ghost:
    'bg-transparent text-[var(--color-primary)] enabled:not-aria-disabled:hover:bg-[var(--color-primary-subtle)]',
  danger:
    'bg-[var(--color-danger)] text-[var(--color-surface)] enabled:not-aria-disabled:hover:bg-[var(--color-danger-subtle)] enabled:not-aria-disabled:hover:text-[var(--color-danger)]',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'min-h-8 px-3 text-sm',
  md: 'min-h-10 px-4 text-sm',
  lg: 'min-h-12 px-5 text-base',
};

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  className = '',
  children,
  type = 'button',
  onClick,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (loading) {
      event.preventDefault();
      return;
    }

    onClick?.(event);
  };

  return (
    <button
      {...props}
      onClick={handleClick}
      type={type}
      disabled={isDisabled}
      aria-disabled={loading || undefined}
      aria-busy={loading || undefined}
      className={[
        'inline-flex items-center justify-center gap-2 rounded-md font-semibold',
        'transition-colors duration-150',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        variantClasses[variant],
        sizeClasses[size],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {loading ? (
        <>
          <span
            aria-hidden="true"
            className="size-4 motion-safe:animate-spin rounded-full border-2 border-current border-r-transparent"
          />
          <span>{children}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
