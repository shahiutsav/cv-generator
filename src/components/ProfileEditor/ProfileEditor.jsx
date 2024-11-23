import { forwardRef } from "react";
import styles from "./ProfileEditor.module.css";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";
import { CollapsibleCard } from "@/components/ui/CollapsibleCard/CollapsibleCard";
import { Button } from "@/components/ui/Button/Button";
import { CollapsibleGroup } from "../ui/CollapsibleGroup/CollapsibleGroup";
import { Input } from "../ui/Input/Input";

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
      <PersonalInformationCard cvData={data} setCvData={setData} />
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
          marginTop: "16px",
        }}
      >
        <Input placeholder="Name" />
        <Input type="file" />
        <Input disabled />
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

// const EducationInformationCard = forwardRef(function EducationInformationCard(
//   { className, cvData, ...props },
//   ref
// ) {
//   return (
//     <CollapsibleCard
//       title="Education"
//       ref={ref}
//       className={cn(styles.educationInformationCard, className)}
//       {...props}
//     >
//       <FormCarousel
//         listSection={
//           <div>
//             {cvData.education.map((edu, index) => (
//               <div key={index}>
//                 <SectionCard title={edu.institution} />
//                 {index !== cvData.education.length - 1 && <Divider />}
//               </div>
//             ))}
//           </div>
//         }
//         sectionName="Education"
//         formSection={
//           <>
//             <TextInput labelName="School" />
//             <TextInput labelName="Degree" />
//             <TextInput labelName="Field of study" />
//             <TextInput labelName="From" />
//             <TextInput labelName="To" />
//           </>
//         }
//       />
//     </CollapsibleCard>
//   );
// });

// EducationInformationCard.displayName = "EducationInformationCard";

// EducationInformationCard.propTypes = {
//   className: PropTypes.string,
//   cvData: PropTypes.object,
// };

// const WorkInformationCard = forwardRef(function WorkInformationCard(
//   { className, cvData, ...props },
//   ref
// ) {
//   return (
//     <CollapsibleCard
//       title="Experience"
//       ref={ref}
//       className={cn(styles.workInformationCard, className)}
//       {...props}
//     >
//       <FormCarousel
//         listSection={
//           <div>
//             {cvData.experience.map((exp, index) => (
//               <div key={index}>
//                 <SectionCard title={exp.company} />
//                 {index !== cvData.experience.length - 1 && <Divider />}
//               </div>
//             ))}
//           </div>
//         }
//         sectionName="Experience"
//         formSection={
//           <>
//             <TextInput labelName="Job title" />
//             <TextInput labelName="Company" />
//             <TextInput labelName="From" />
//             <TextInput labelName="To" />
//           </>
//         }
//       />
//     </CollapsibleCard>
//   );
// });

// WorkInformationCard.displayName = "WorkInformationCard";

// WorkInformationCard.propTypes = {
//   className: PropTypes.string,
//   cvData: PropTypes.object,
// };

export default ProfileEditor;
