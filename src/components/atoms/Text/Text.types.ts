import { HTMLAttributes, PropsWithChildren } from "react";

type Element = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label";
type Font = "primary" | "secondary";
type Size = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
type FontWeight = "light" | "normal" | "medium" | "bold";
type FontStyle = "normal" | "italic" | "underline";
type Alignment = "left" | "center" | "right" | "justify";
type TextColor = "white" | "gray" | "yellow";

export interface TextProps extends React.JSX.IntrinsicAttributes, PropsWithChildren<HTMLAttributes<HTMLElement>> {
  font?: Font;
  size?: Size;
  align?: Alignment;
  textColor?: TextColor;
  fontWeight?: FontWeight;
  fontStyle?: FontStyle;
  id?: string;
  as?: Element;
  className?: string;
  title?: string;
  lineHeight?: number;
  style?: React.CSSProperties;
  display?: "block" | "inline" | "inline-block";
  textTransform?: "uppercase" | "lowercase" | "capitalize";
  letterSpacing?: string;
}
