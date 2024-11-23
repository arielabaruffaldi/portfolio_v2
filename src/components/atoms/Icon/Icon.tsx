import { FunctionComponent } from "react";
import * as FeatherIcon from "react-feather";
import { IconProps } from "./Icon.types";
import classNames from "classnames";

import styles from "./Icon.module.css";

export const Icon: FunctionComponent<IconProps> = ({
  name,
  className = "",
  height = 24,
  width = 24,
  color = "currentColor",
}) => {
  const Icons = FeatherIcon as any;
  const Component = Icons[name];
  console.log({ Icons, Component });
  /* const dynamicClasses = classNames(className, styles.icon, {
    [styles[size]]: size,
  }); */

  return (
    Component && (
      <Component style={{ height: height, width: width, color: color }} />
    )
  );
};
