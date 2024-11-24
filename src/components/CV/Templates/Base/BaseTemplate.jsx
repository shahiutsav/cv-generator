import { forwardRef } from "react";
import {
  CVContainer,
  CVLayout,
  CVSection,
} from "@/components/CV/Primitive/Primitive";
import PropTypes from "prop-types";
import styles from "./BaseTemplate.module.css";
import { Home, Mail, Phone } from "lucide-react";

const BaseTemplate = forwardRef(({ data }, ref) => {
  return (
    <CVContainer ref={ref} className={styles.container}>
      <CVLayout direction="row" className={styles.layout}>
        <CVLayout.Column className={styles.leftColumn}>
          <CVSection className={styles.profileSection}>
            <h1 className={styles.name}>
              {data.profile.firstName} {data.profile.lastName}
            </h1>
            <p className={styles.title}>{data.profile.jobTitle}</p>
          </CVSection>
          <CVSection className={styles.contactSection}>
            <h2>Contact</h2>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <Phone />
                <p className={styles.phone}>{data.profile.phone}</p>
              </li>
              <li className={styles.contactItem}>
                <Mail />
                <p className={styles.email}>{data.profile.email}</p>
              </li>
              <li className={styles.contactItem}>
                <Home />
                <p className={styles.website}>{data.profile.address}</p>
              </li>
            </ul>
          </CVSection>
          <CVSection>
            <h2>Education</h2>
            {data.education.map((item) => (
              <div key={item.id} className={styles.educationItem}>
                <p className={styles.date}>
                  {item.startDate}-{item.endDate}
                </p>
                <p className={styles.institution}>{item.institution}</p>
                <p className={styles.heading1}>
                  {item.degree} in {item.fieldOfStudy}
                </p>
              </div>
            ))}
          </CVSection>
        </CVLayout.Column>
        <div className={styles.columnDivider}></div>
        <CVLayout.Column className={styles.rightColumn}>
          <CVSection>
            <h2>Experience</h2>
            {data.work.map((item) => (
              <div key={item.id} className={styles.workItem}>
                <p className={styles.date}>
                  {item.startDate}-{item.endDate}
                </p>
                <p className={styles.company}>{item.company}</p>
                <p className={styles.position}>{item.position}</p>
                <p className={styles.description}>{item.description}</p>
              </div>
            ))}
          </CVSection>
        </CVLayout.Column>
      </CVLayout>
    </CVContainer>
  );
});

BaseTemplate.displayName = "BaseTemplate";

BaseTemplate.propTypes = {
  data: PropTypes.object,
};

export { BaseTemplate };
