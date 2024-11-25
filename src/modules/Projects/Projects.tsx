import { FunctionComponent } from "react";

import styles from "./Projects.module.scss";
import { PortfolioCarrousel } from "@/components/organisms/PortfolioCarrousel/PortfolioCarrousel";
import { SectionWrapper } from "@/components/templates/SectionWrapper/SectionWrapper";

export const Projects: FunctionComponent = () => {
  return (
    <SectionWrapper
      hasPadding
      title="Projects"
      id="projects"
      // className={styles.projects}
    >
      <PortfolioCarrousel />
    </SectionWrapper>
    /*  <section id="projects" className={styles.projects}>
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
        Projects
      </Text>
      <PortfolioCarrousel />
    </section> */
  );
};
