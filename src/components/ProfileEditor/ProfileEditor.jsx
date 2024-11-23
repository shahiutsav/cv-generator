import { forwardRef } from "react";
import styles from "./ProfileEditor.module.css";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";
import { CollapsibleCard } from "@/components/ui/CollapsibleCard/CollapsibleCard";
import TextInput from "@/components/TextInput/TextInput";
import { Button } from "@/components/ui/Button/Button";
import FormCarousel from "../FormCarousel/FormCarousel";
import SectionCard from "../SectionCard/SectionCard";
import Divider from "../Divider/Divider";
import { CollapsibleGroup } from "../ui/CollapsibleGroup/CollapsibleGroup";

const ProfileEditor = forwardRef(function ProfileEditor(
  { className, data, setData, ...props },
  ref
) {
  return (
    <CollapsibleGroup
      defaultOpenIndex={0}
      ref={ref}
      className={cn(styles.profileEditor, className)}
      {...props}
    >
      <PersonalInformationCard cvData={data} setCvData={setData} />
      <EducationInformationCard cvData={data} />
      <WorkInformationCard cvData={data} />
    </CollapsibleGroup>
  );
});

ProfileEditor.displayName = "ProfileEditor";

ProfileEditor.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  setData: PropTypes.func,
};

const PersonalInformationCard = forwardRef(function PersonalInformationCard(
  { className, cvData, setCvData, ...props },
  ref
) {
  return (
    <CollapsibleCard
      title="Profile"
      ref={ref}
      className={cn(styles.personalInformationCard, className)}
      {...props}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          height: "100%",
        }}
      >
        <div style={{ display: "flex", gap: "16px" }}>
          <TextInput
            labelName="First name"
            value={cvData.profile.firstName}
            onChange={(e) =>
              setCvData({
                ...cvData,
                profile: { ...cvData.profile, firstName: e.target.value },
              })
            }
          />
          <TextInput
            labelName="Last name"
            value={cvData.profile.lastName}
            onChange={(e) =>
              setCvData({
                ...cvData,
                profile: { ...cvData.profile, lastName: e.target.value },
              })
            }
          />
        </div>
        <TextInput
          labelName="Email"
          value={cvData.profile.email}
          onChange={(e) =>
            setCvData({
              ...cvData,
              profile: { ...cvData.profile, email: e.target.value },
            })
          }
        />
        <TextInput
          labelName="Phone"
          value={cvData.profile.phone}
          onChange={(e) =>
            setCvData({
              ...cvData,
              profile: { ...cvData.profile, phone: e.target.value },
            })
          }
        />
        <TextInput
          labelName="Address"
          value={cvData.profile.address}
          onChange={(e) =>
            setCvData({
              ...cvData,
              profile: { ...cvData.profile, address: e.target.value },
            })
          }
        />

        <Button style={{ width: "100%" }} variant="secondary">
          Save
        </Button>
      </div>
    </CollapsibleCard>
  );
});

PersonalInformationCard.displayName = "PersonalInformationCard";

PersonalInformationCard.propTypes = {
  className: PropTypes.string,
  cvData: PropTypes.object,
  setCvData: PropTypes.func,
};

const EducationInformationCard = forwardRef(function EducationInformationCard(
  { className, cvData, ...props },
  ref
) {
  return (
    <CollapsibleCard
      title="Education"
      ref={ref}
      className={cn(styles.educationInformationCard, className)}
      {...props}
    >
      <FormCarousel
        listSection={
          <div>
            {cvData.education.map((edu, index) => (
              <div key={index}>
                <SectionCard title={edu.institution} />
                {index !== cvData.education.length - 1 && <Divider />}
              </div>
            ))}
          </div>
        }
        sectionName="Education"
        formSection={
          <>
            <TextInput labelName="School" />
            <TextInput labelName="Degree" />
            <TextInput labelName="Field of study" />
            <TextInput labelName="From" />
            <TextInput labelName="To" />
          </>
        }
      />
    </CollapsibleCard>
  );
});

EducationInformationCard.displayName = "EducationInformationCard";

EducationInformationCard.propTypes = {
  className: PropTypes.string,
  cvData: PropTypes.object,
};

const WorkInformationCard = forwardRef(function WorkInformationCard(
  { className, cvData, ...props },
  ref
) {
  return (
    <CollapsibleCard
      title="Experience"
      ref={ref}
      className={cn(styles.workInformationCard, className)}
      {...props}
    >
      <FormCarousel
        listSection={
          <div>
            {cvData.experience.map((exp, index) => (
              <div key={index}>
                <SectionCard title={exp.company} />
                {index !== cvData.experience.length - 1 && <Divider />}
              </div>
            ))}
          </div>
        }
        sectionName="Experience"
        formSection={
          <>
            <TextInput labelName="Job title" />
            <TextInput labelName="Company" />
            <TextInput labelName="From" />
            <TextInput labelName="To" />
          </>
        }
      />
    </CollapsibleCard>
  );
});

WorkInformationCard.displayName = "WorkInformationCard";

WorkInformationCard.propTypes = {
  className: PropTypes.string,
  cvData: PropTypes.object,
};

export default ProfileEditor;
