import type { HTMLAttributes, ReactNode } from 'react';

export type BadgeVariant =
  'success' | 'warning' | 'danger' | 'info' | 'neutral';

export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Visual intent of the badge. */
  variant?: BadgeVariant;
  /** Controls the badge's height and horizontal padding. */
  size?: BadgeSize;
  children: ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  success: 'bg-success-subtle text-success border border-success',
  warning: 'bg-warning-subtle text-warning border border-warning',
  danger: 'bg-danger-subtle text-danger border border-danger',
  info: 'bg-info-subtle text-info border border-info',
  neutral: 'bg-neutral-subtle text-neutral border border-neutral',
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'min-h-6 px-3 text-xs',
  md: 'min-h-8 px-4 text-sm',
  lg: 'min-h-10 px-5 text-base',
};

export function Badge({
  variant = 'neutral',
  size = 'md',
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      {...props}
      className={[
        'inline-flex items-center justify-center gap-2 rounded-full',
        'transition-colors duration-150',
        variantClasses[variant],
        sizeClasses[size],
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  );
}
