import { FunctionComponent } from "react";

import styles from "./Projects.module.scss";
import { PortfolioCarrousel } from "@/components/organisms/PortfolioCarrousel/PortfolioCarrousel";
import { Text } from "@/components/atoms/Text/Text";

export const Projects: FunctionComponent = () => {
  return (
    <section id="projects" className={styles.projects}>
      <Text
        className={styles.projects__title}
        textColor="yellow"
        size="xxs"
        fontWeight="bold"
        as="span"
        display="inline"
      >
        /
      </Text>
      <Text
        display="inline"
        as="h2"
        className={styles.projects__title}
        size="xxs"
        fontWeight="bold"
      >
        Projects
      </Text>
      <PortfolioCarrousel />
    </section>
  );
};
