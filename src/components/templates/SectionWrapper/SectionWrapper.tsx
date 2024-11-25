import { FunctionComponent } from "react";

import styles from "./SectionWrapper.module.scss";
import { SectionWrapperProps } from "./SectionWrapper.types";
import { Text } from "@/components/atoms/Text/Text";
import classNames from "classnames";

export const SectionWrapper: FunctionComponent<SectionWrapperProps> = ({
  title,
  id,
  children,
  className,
  hasPadding,
  style,
}) => {
  const dynamicClasses = classNames(className, {
    [styles["hasPadding"]]: hasPadding,
    // [styles[size]]: textColor,
  });
  return (
    <section id={id} className={dynamicClasses} style={{ ...style }}>
      {title && (
        <>
          <Text
            textColor="yellow"
            size="xxs"
            fontWeight="bold"
            as="span"
            display="inline"
            letterSpacing=".3rem"
          >
            /
          </Text>
          <Text
            display="inline"
            as="h2"
            size="xxs"
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing=".3rem"
          >
            {title}
          </Text>
        </>
      )}
      {children}
    </section>
  );
};
