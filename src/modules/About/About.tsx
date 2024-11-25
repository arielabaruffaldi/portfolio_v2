import { FunctionComponent } from "react";

import styles from "./About.module.scss";
import { Text } from "@/components/atoms/Text/Text";
import { SectionWrapper } from "@/components/templates/SectionWrapper/SectionWrapper";
import { Skills } from "./components/Skills/Skills";

export const About: FunctionComponent = () => {
  return (
    <SectionWrapper
      title="About"
      id="about"
      className={styles.about}
      hasPadding
    >
      {/*  <div className={styles.about__description}>
        <Text size="lg" textColor="gray">
          I am a{" "}
          <Text as="span" size="lg" fontStyle="italic">
            {" "}
            Frontend Developer
          </Text>{" "}
          with a passion for creatin{" "}
          <Text as="span" size="lg" fontStyle="italic">
            beautiful and functional user interfaces.
          </Text>{" "}
        </Text>
        <Text size="lg" textColor="gray">
          I have experience working with modern technologies such as
          <Text as="span" size="lg" fontStyle="italic">
            {" "}
            React, Redux, Next.js, and Tailwind CSS.
          </Text>{" "}
        </Text>
        <Text size="lg" textColor="gray">
          I am always looking for new challenges and opportunities to grow as a
          developer.
        </Text>
      </div> */}
      <Skills />
    </SectionWrapper>
  );
};
