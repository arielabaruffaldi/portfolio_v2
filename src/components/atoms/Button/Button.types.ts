import { ButtonHTMLAttributes, LinkHTMLAttributes, ReactElement } from "react";
import { IconProps } from "../Icon/Icon.types";

type Variant = "text" | "outlined" | "contained";
type Size = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  onClick?: () => void;
  className?: string;
  size?: Size;
  href?: string;
  iconStart?: ReactElement<IconProps>;
}
