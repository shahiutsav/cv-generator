import { forwardRef, useEffect, useRef } from "react";
import styles from "./CollapsibleCard.module.css";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card/Card";
import { ChevronDown } from "lucide-react";

const CollapsibleCard = forwardRef(function CollapsibleCard(
  { className, title, isOpen, hasTransition, onToggle, ...props },
  ref
) {
  const collapseWrapperRef = useRef(null);
  const dropDownIconRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const wrapper = collapseWrapperRef.current;
      wrapper.style.paddingBottom = "1.5rem";
      wrapper.style.maxHeight = wrapper.scrollHeight + "px";
      dropDownIconRef.current.style.transform = "rotate(180deg)";
    } else {
      const wrapper = collapseWrapperRef.current;
      wrapper.style.maxHeight = "0px";
      dropDownIconRef.current.style.transform = "rotate(0deg)";
      wrapper.style.paddingBottom = "0rem";
    }

    if (hasTransition) {
      collapseWrapperRef.current.style.transition = "all 0.2s ease-in-out";
      dropDownIconRef.current.style.transition = "all 0.1s ease-in-out";
    } else {
      collapseWrapperRef.current.style.transition = "none";
      dropDownIconRef.current.style.transition = "none";
    }
  }, [isOpen, hasTransition]);
  return (
    <Card
      ref={ref}
      className={cn(styles.collapsibleCard, className)}
      {...props}
    >
      <CardHeader style={{ cursor: "pointer" }} onClick={onToggle}>
        <CardTitle className={styles.cardTitle}>
          {title}
          <ChevronDown
            style={{ width: "20px", height: "20px" }}
            ref={dropDownIconRef}
          />
        </CardTitle>
      </CardHeader>
      <div ref={collapseWrapperRef} className={styles.collapsibleWrapper}>
        <CardContent>{props.children}</CardContent>
      </div>
    </Card>
  );
});

CollapsibleCard.displayName = "CollapsibleCard";

CollapsibleCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  hasTransition: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
};

export { CollapsibleCard };
