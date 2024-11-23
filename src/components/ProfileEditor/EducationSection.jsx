import { useState, forwardRef } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";
import { CollapsibleCard } from "@/components/ui/CollapsibleCard/CollapsibleCard";
import { Input } from "@/components/ui/Input/Input";
import { SlidingViews } from "@/components/ui/SlidingViews/SlidingViews";
import PropTypes from "prop-types";
import styles from "./EducationSection.module.css";

const EducationSection = forwardRef(
  ({ className, cvData, setCvData, ...props }, ref) => {
    const [activeView, setActiveView] = useState(0);
    const [formData, setFormData] = useState({
      institution: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      setCvData((prev) => ({
        ...prev,
        education: [...(prev.education || []), formData],
      }));
      setFormData({
        institution: "",
        degree: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
      });
      setActiveView(0);
    };

    return (
      <CollapsibleCard
        title="Education"
        ref={ref}
        className={className}
        {...props}
      >
        <SlidingViews activeView={activeView}>
          <SlidingViews.View>
            <div className={styles.header}>
              <Button
                variant="outline"
                onClick={() => setActiveView(1)}
                className={styles.addButton}
              >
                Add Education
              </Button>
            </div>

            <div className={styles.list}>
              {(cvData.education || []).map((edu, index) => (
                <div key={index} className={styles.card}>
                  <h4 className={styles.institutionName}>{edu.institution}</h4>
                  <p className={styles.degree}>
                    {edu.degree} in {edu.fieldOfStudy}
                  </p>
                  <p className={styles.date}>
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
              ))}
              {(!cvData.education || cvData.education.length === 0) && (
                <p className={styles.emptyMessage}>
                  No education history added yet
                </p>
              )}
            </div>
          </SlidingViews.View>

          <SlidingViews.View>
            <div className={styles.header}>
              <Button
                variant="icon"
                onClick={() => setActiveView(0)}
                className={styles.backButton}
              >
                <ArrowLeft className={styles.icon} />
              </Button>
              <Button type="submit" className={styles.submitButton}>
                Save
              </Button>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formFields}>
                <Input
                  placeholder="Institution"
                  label="Institution"
                  value={formData.institution}
                  onChange={(e) =>
                    setFormData({ ...formData, institution: e.target.value })
                  }
                  required
                />
                <Input
                  placeholder="Degree"
                  label="Degree"
                  value={formData.degree}
                  onChange={(e) =>
                    setFormData({ ...formData, degree: e.target.value })
                  }
                  required
                />
                <Input
                  placeholder="Field of Study"
                  label="Field of Study"
                  value={formData.fieldOfStudy}
                  onChange={(e) =>
                    setFormData({ ...formData, fieldOfStudy: e.target.value })
                  }
                  required
                />
                <div className={styles.dateFields}>
                  <Input
                    placeholder="Start Date"
                    label="Start Date"
                    type="month"
                    
                    value={formData.startDate}
                    onChange={(e) =>
                      setFormData({ ...formData, startDate: e.target.value })
                    }
                    required
                  />
                  <Input
                    placeholder="End Date"
                    label="End Date"
                    type="month"
                    value={formData.endDate}
                    onChange={(e) =>
                      setFormData({ ...formData, endDate: e.target.value })
                    }
                  />
                </div>
              </div>
            </form>
          </SlidingViews.View>
        </SlidingViews>
      </CollapsibleCard>
    );
  }
);

EducationSection.displayName = "EducationSection";

EducationSection.propTypes = {
  className: PropTypes.string,
  cvData: PropTypes.object,
  setCvData: PropTypes.func,
};

export default EducationSection;
