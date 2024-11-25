import { Text } from "@/components/atoms/Text/Text";

import styles from "./Main.module.scss";
import { ReactTyped } from "react-typed";
import { SocialMedias } from "@/components/organisms/SocialMedias/SocialMedias";
import { Footer } from "@/components/templates/Footer/Footer";
import { Projects } from "../Projects/Projects";
import { About } from "../About/About";

export const Main = () => {
  const currentDate = new Date();
  const currentAge = currentDate.getFullYear() - 1996;
  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        <Text
          as="h1"
          align="left"
          font="secondary"
          fontWeight="bold"
          className={styles.main__title}
          lineHeight={1}
        >
          Front-end
        </Text>
        <Text
          as="h1"
          fontWeight="bold"
          align="left"
          font="secondary"
          className={styles.main__title}
          lineHeight={1.5}
        >
          <ReactTyped strings={["Developer"]} typeSpeed={100} loop />
        </Text>
        <div className={styles.main__subtitle}>
          <Text
            size="xl"
            textColor="gray"
            className={styles.main__subtitle__text}
          >
            Hi there! I'm{" "}
            <Text fontStyle="italic" as="span" textColor="white" size="xl">
              Ariela
            </Text>
            , a {currentAge} years old{" "}
            <Text fontStyle="italic" as="span" textColor="white" size="xl">
              front-end developer{" "}
            </Text>
            based in Buenos Aires.
          </Text>
        </div>
        <SocialMedias />
      </div>
      <Projects />
      <About />
    </main>
  );
};
