import { Text } from "@/components/atoms/Text/Text";

import styles from "./Nav.module.scss";
import { Button } from "@/components/atoms/Button/Button";

export const Nav = () => {
  return (
    <header className={styles.nav}>
      <Text font="secondary" className={styles.nav__title}>
        Ariela <span> Baruffaldi</span>
      </Text>

      <nav aria-labelledby="mainmenulabel" className={styles.nav__menu}>
        <ul /* className={styles.nav__list} */>
          <li role="none" /* className={styles.nav__item} */>
            <a href="#projects" role="menuitem" /* className={styles.nav__link} */>
              Projects
            </a>
          </li>
          <li role="none" /* className={styles.nav__item} */>
            <a href="#about" role="menuitem" /* className={styles.nav__link} */>
              About
            </a>
          </li>
          <li role="none" /* className={styles.nav__item} */>
            <a href="#contact" role="menuitem" /* className={styles.nav__link} */>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <nav>
        <ul>
          <li>
            <Button variant="outlined">
              <Text size="md">En</Text>
            </Button>
          </li>
          <li>
            <Button variant="text">
              <Text size="md" textColor="gray">
                Es
              </Text>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
