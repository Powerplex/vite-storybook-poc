import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";

type Props = {
  className?: string;
};

const button = cva(
  [
    "font-semibold",
    "border-xs",
    "border-solid",
    "rounded-xs",
    "hover:transition-colors",
    "hover:duration-100",
    "border-transparent"
  ],
  {
    variants: {
      disabled: {
        true: ["opacity-50", "cursor-not-allowed"],
      },
      intent: {
        primary: [
          "bg-bg-primary",
          "text-fg-cta",
          "hover:bg-bg-primary-subtle",
        ],
        secondary: [
          "bg-bg-secondary",
          "text-main-text",
          "hover:bg-bg-secondary-subtle",
        ],
      },
      size: {
        small: ["text-s", "px-s", "py-xs"],
        medium: ["text-m", "px-m", "py-s"],
        large: ["text-l", "px-l", "py-m"],
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "small",
    },
    compoundVariants: [
      {
        intent: "primary",
        size: "small",
        disabled: true,
        className: "border-4 border-pink-500",
      },
    ],
  }
);

type CVAProps = VariantProps<typeof button>; // & { intent: string } <- to mark a prop as required

export function Button({
  className,
  color = "gray",
  children,
  intent,
  size,
  ...rest
}: ComponentPropsWithoutRef<"button"> & Props & CVAProps) {
  return (
    <button
      className={button({
        intent,
        size,
        disabled: !!rest.disabled,
        className,
      })}
      {...rest}
    >
      {children}
    </button>
  );
}
