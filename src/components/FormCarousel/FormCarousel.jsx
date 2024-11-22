import { forwardRef, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./FormCarousel.module.css";

const FormCarousel = ({ listSection, sectionName, formSection }) => {
  const containerRef = useRef(null);
  const listRef = useRef(null);
  const formRef = useRef(null);

  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    if (isFormOpen) {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
      // Change height accordingly
      containerRef.current.style.maxHeight =
        formRef.current.scrollHeight + "px";
    } else {
      listRef.current?.scrollIntoView({ behavior: "smooth" });
      // Change height accordingly
      containerRef.current.style.maxHeight =
        listRef.current.scrollHeight + "px";
    }
  }, [isFormOpen]);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.list} ref={listRef}>
        <div>{listSection}</div>
        <button onClick={handleOpenForm}>Add {sectionName}</button>
      </div>
      <FormSection
        ref={formRef}
        onSubmit={handleCloseForm}
        onCancel={handleCloseForm}
      >
        {formSection}
      </FormSection>
    </div>
  );
};

FormCarousel.propTypes = {
  listSection: PropTypes.node,
  sectionName: PropTypes.string,
  formSection: PropTypes.node,
};

const FormSection = forwardRef(({ children, onSubmit, onCancel }, ref) => (
  <div className={styles.form} ref={ref}>
    {children}
    <div className={styles.actions}>
      <button onClick={onCancel}>Cancel</button>
      <button onClick={onSubmit}>Save</button>
    </div>
  </div>
));

FormSection.displayName = "FormSection";

FormSection.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
};

export default FormCarousel;
