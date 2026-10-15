'use client';

import type { ReactNode } from 'react';

export type BadgeVariant =
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  /** Visual intent of the badge. */
  variant?: BadgeVariant;
  /** Controls the badge's height and horizontal padding. */
  size?: BadgeSize;
  /** Shows a compact progress indicator and prevents duplicate interaction. */
  loading?: boolean;
  className: string;
  children: ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  success:
    'bg-[var(--color-success-subtle)] text-[var(--color-success)] border-[var(--color-success)] border-1',
  warning:
    'bg-[var(--color-warning-subtle)] text-[var(--color-warning)] border-[var(--color-warning)] border-1',
  danger:
    'bg-[var(--color-danger-subtle)] text-[var(--color-danger)] border-[var(--color-danger)] border-1',
  info: 'bg-[var(--color-info-subtle)] text-[var(--color-info)] border-[var(--color-info)] border-1',
  neutral:
    'bg-[var(--color-neutral-subtle)] text-[var(--color-neutral)] border-[var(--color-neutral)] border-1',
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'min-h-6 px-3 text-xs',
  md: 'min-h-8 px-4 text-sm',
  lg: 'min-h-10 px-5 text-base',
};

export function Badge({
  variant = 'success',
  size = 'md',
  loading = false,
  className = '',
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      {...props}
      aria-busy={loading || undefined}
      className={[
        'inline-flex items-center justify-center gap-2 rounded-full',
        'transition-colors duration-150',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
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
            className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent"
          />
          <span>{children}</span>
        </>
      ) : (
        children
      )}
    </span>
  );
}
