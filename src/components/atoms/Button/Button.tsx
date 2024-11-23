import { FunctionComponent, MouseEvent } from "react";
import { ButtonProps } from "./Button.types";

import styles from "./Button.module.scss";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export const Button: FunctionComponent<ButtonProps> = ({
  onClick,
  children,
  variant = "text",
  className = "",
  size = "md",
  href,
  iconStart,
  style
}) => {
  const navigate = useNavigate();

  const dynamicClasses = classNames(className, styles.button, {
    [styles[variant]]: variant,
    [styles[size]]: size,
  });

  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
    if (href) {
      if (href.startsWith("/")) {
        return navigate(href);
      }
      return window.open(href);
    }
  };

  return (
    <button className={dynamicClasses} onClick={handleClick} style={style}>
      {iconStart && iconStart}
      {children}
    </button>
  );
};
