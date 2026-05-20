"use client";

import { motion, type HTMLMotionProps } from "motion/react";

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: "primary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
};

const variants = {
  primary:
    "bg-brand text-white shadow-[0_4px_20px_rgba(193,53,73,0.35)] hover:bg-brand-dark hover:shadow-[0_8px_28px_rgba(193,53,73,0.4)]",
  outline:
    "border-2 border-brand/90 bg-transparent text-brand hover:bg-brand hover:text-white hover:border-brand",
  ghost:
    "bg-dark/5 text-dark hover:bg-dark hover:text-white",
  white:
    "bg-white text-brand shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:bg-white/95 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]",
};

const sizes = {
  sm: "px-5 py-2.5 text-xs tracking-wide",
  md: "px-7 py-3.5 text-sm tracking-wide",
  lg: "px-9 py-4 text-base tracking-wide",
};

export function Button({
  variant = "primary",
  size = "md",
  fullWidth,
  className = "",
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={disabled ? undefined : { scale: 1.02, y: -1 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className={`font-pp inline-flex cursor-pointer items-center justify-center rounded-full font-extrabold transition-[background-color,box-shadow,border-color,color] duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-55 disabled:shadow-none ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
}
