import { FunctionComponent } from "react";
import { TextProps } from "./Text.types";
import classNames from "classnames";
import styles from "./Text.module.scss";

export const Text: FunctionComponent<TextProps> = ({
  font = "primary",
  size = "md",
  textColor = "white",
  align = "left",
  fontWeight = "normal",
  fontStyle = "normal",
  as: AsComponent = "p",
  className = "",
  id,
  title,
  children,
  lineHeight = 1.5,
  style,
  display,
  ...props
}) => {
  const dynamicClasses = classNames(className, {
    [styles[`font__${font}`]]: font,
    [styles[align]]: align,
    [styles[fontWeight]]: fontWeight,
    [styles[fontStyle]]: fontStyle,
    [styles[`color__${textColor}`]]: textColor,
    [styles[size]]: size,
    // [styles[size]]: textColor,
  });
  return (
    <AsComponent
      title={title}
      className={dynamicClasses}
      {...(id && { id })}
      style={{
        lineHeight,
        display,
        ...style,
      }}
      {...props}
    >
      {children}
    </AsComponent>
  );
};
