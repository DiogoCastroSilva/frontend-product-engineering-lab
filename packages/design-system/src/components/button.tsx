"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

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
  primary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]",
  secondary: "border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:bg-slate-50",
  ghost: "bg-transparent text-[var(--color-text)] hover:bg-slate-100",
  danger: "bg-[var(--color-error)] text-white hover:bg-red-700",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-8 px-3 text-sm",
  md: "min-h-10 px-4 text-sm",
  lg: "min-h-12 px-5 text-base",
};

/** Accessible, semantic button with consistent variants, sizes, and focus treatment. */
export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  className = "",
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      {...props}
      type={type}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-md font-semibold",
        "transition-colors duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].filter(Boolean).join(" ")}
    >
      {loading ? (
        <>
          <span aria-hidden="true" className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent" />
          <span>{children}</span>
        </>
      ) : children}
    </button>
  );
}
