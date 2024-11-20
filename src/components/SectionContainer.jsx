import { ChevronDown } from "lucide-react";
import "../styles/SectionContainer.css";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
const SectionContainer = ({ header, children, isOpen, onToggle, hasTransition }) => {
  const collapseWrapper = useRef(null);
  const dropDownIcon = useRef(null);

  useEffect(() => {
    if (isOpen) {
      collapseWrapper.current.style.maxHeight =
        collapseWrapper.current.scrollHeight + "px";
      dropDownIcon.current.style.transform = "rotate(180deg)";
    } else {
      collapseWrapper.current.style.maxHeight = "0px";
      dropDownIcon.current.style.transform = "rotate(0deg)";
    }

    // Dynamically apply transition if allowed
    if (hasTransition) {
      collapseWrapper.current.style.transition = "max-height 0.2s ease-in-out";
      dropDownIcon.current.style.transition = "transform 0.2s ease-in-out";
    } else {
      collapseWrapper.current.style.transition = "none";
      dropDownIcon.current.style.transition = "none";
    }
  }, [isOpen, hasTransition]);

  return (
    <section className="section">
      <div className="section-heading section-container" onClick={onToggle}>
        <h2>{header}</h2>
        <div className="dropdown-icon" ref={dropDownIcon}>
          <ChevronDown />
        </div>
      </div>
      <div className="section-heading-divider"></div>
      <div className="section-container collapse-wrapper" ref={collapseWrapper}>
        <div className="section-content">{children}</div>
      </div>
    </section>
  );
};

SectionContainer.propTypes = {
  header: PropTypes.string,
  children: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  hasTransition: PropTypes.bool,
};

export default SectionContainer;
