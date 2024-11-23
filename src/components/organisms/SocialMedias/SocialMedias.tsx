import { Button } from "@/components/atoms/Button/Button";
import { Icon } from "@/components/atoms/Icon/Icon";
import { Text } from "@/components/atoms/Text/Text";
import { GitHub } from "react-feather";

import styles from './SocialMedias.module.scss';

export const SocialMedias = () => {
  return (
    <nav className={styles.socialMedias}>
      <ul>
        <li>
          <Button
            variant="outlined"
            href="https://github.com/arielabaruffaldi"
            iconStart={<Icon name="GitHub" height={20} />}
            size="lg"
            style={{ gap: ".5rem", borderRadius: "2rem" }}
          >
            <Text size="sm" textColor="gray" fontStyle="italic">
              Github
            </Text>
          </Button>
        </li>
        <li>
          <Button
            variant="outlined"
            href="https://www.linkedin.com/in/arielabaruffaldi/"
            iconStart={<Icon name="Linkedin" height={20} />}
            size="lg"
            style={{ gap: ".5rem", borderRadius: "2rem" }}
          >
            <Text size="sm" textColor="gray" fontStyle="italic">
              Linkedin
            </Text>
          </Button>
        </li>
      </ul>
    </nav>
  );
};
