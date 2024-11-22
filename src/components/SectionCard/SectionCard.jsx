import styles from "./SectionCard.module.css";
import PropTypes from "prop-types";
import { Pencil } from "lucide-react";
import { Trash } from "lucide-react";
import { Eye } from "lucide-react";

const SectionCard = ({ title }) => {
  return (
    <div className={styles.card}>
      <p>{title}</p>
      <div className={styles.cardIcons}>
        <button className={styles.button}>
          <Pencil />
        </button>
        <button className={styles.button}>
          <Trash />
        </button>
        <button className={styles.button}>
          <Eye />
        </button>
      </div>
    </div>
  );
};

SectionCard.propTypes = {
  title: PropTypes.string,
};

export default SectionCard;
