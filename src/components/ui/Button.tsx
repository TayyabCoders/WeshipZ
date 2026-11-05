import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className">;

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-[#1f5acc] shadow-sm shadow-primary/25",
  secondary:
    "bg-surface-dark text-primary-foreground hover:bg-[#2c303a]",
  ghost:
    "bg-transparent text-foreground hover:bg-primary/5 border border-border",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
};

function buttonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-wide transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

function isLinkProps(props: ButtonProps): props is ButtonAsLink {
  return "href" in props && typeof props.href === "string";
}

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";
  const classes = buttonClasses(variant, size, props.className);

  if (isLinkProps(props)) {
    if (props.external) {
      return (
        <a
          href={props.href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {props.children}
      </Link>
    );
  }

  const {
    variant: _v,
    size: _s,
    className: _c,
    children,
    type = "button",
    ...rest
  } = props;

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
