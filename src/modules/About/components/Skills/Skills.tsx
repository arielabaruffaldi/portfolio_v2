import { Text } from "@/components/atoms/Text/Text";
import { skills } from "@/utils/skills";

import styles from "./Skills.module.scss";

export const Skills = () => {
  return (
    <div>
      {skills.map((skill) => (
        <div key={skill.title} className={styles.skill}>
          <Text as="h3" size="xxl">
            {skill.title}
          </Text>
          <ul className={styles.skill__detail}>
            {skill.skills.map((s, i) => (
              <li key={s}>
                <Text
                  display="inline"
                  font="secondary"
                  className={styles.skill__detail__text}
                >
                  {s}
                </Text>
                <Text
                  as="span"
                  display="inline"
                  font="secondary"
                  className={styles.skill__detail__text}
                  textColor="yellow"
                  style={{ margin: "var(--spacing-2)" }}
                >
                  {i < skill.skills.length - 1 ? "/" : ""}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
