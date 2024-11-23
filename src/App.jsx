import "@/styles/App.css";
import TextInput from "@/components/TextInput/TextInput";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import { useEffect, useState } from "react";
import SectionCard from "@/components/SectionCard/SectionCard";
import Divider from "@/components/Divider/Divider";
import FormCarousel from "@/components/FormCarousel/FormCarousel";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/Card/Card";
import { Button } from "@/components/ui/Button/Button";
import ProfileEditor from "./components/ProfileEditor/ProfileEditor";
import { CollapsibleCard } from "@/components/ui/CollapsibleCard/CollapsibleCard";

function App() {
  const [openIndex, setOpenIndex] = useState(0);
  const [hasTransition, setHasTransition] = useState(false);

  const dummyData = {
    profile: {
      firstName: "John",
      lastName: "Doe",
      email: "p8H8x@example.com",
      phone: "123-456-7890",
      address: "123 Main St",
    },
    education: [
      {
        institution: "ABC University",
        degree: "Bachelor of Science",
        startDate: "2010-09-01",
        endDate: "2014-06-30",
      },
      {
        institution: "XYZ College",
        degree: "Associate of Arts",
        startDate: "2008-09-01",
        endDate: "2010-06-30",
      },
    ],
    experience: [
      {
        company: "XYZ Company",
        position: "Software Engineer",
        startDate: "2015-07-01",
        endDate: "2020-12-31",
      },
    ],
    projects: [
      {
        name: "Project A",
        description: "Description of Project A",
        startDate: "2021-01-01",
        endDate: "2021-12-31",
      },
    ],
  };

  const [cvData, setCvData] = useState(dummyData);

  useEffect(() => {
    const timer = setTimeout(() => setHasTransition(true), 0);
    return () => clearTimeout(timer);
  });

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="body">
      <div className="input-section">
        <CollapsibleCard
          title="Profile"
          isOpen={openIndex === 0}
          onToggle={() => handleToggle(0)}
          hasTransition={hasTransition}
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

        <CollapsibleCard
          title="Education"
          isOpen={openIndex === 1}
          onToggle={() => handleToggle(1)}
          hasTransition={hasTransition}
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

        <CollapsibleCard
          title="Experience"
          isOpen={openIndex === 2}
          onToggle={() => handleToggle(2)}
          hasTransition={hasTransition}
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
      </div>
      <div className="cv-display">
        <h2>
          {cvData.profile.firstName} {cvData.profile.lastName}
        </h2>
        <p>{cvData.profile.email}</p>
        <p>{cvData.profile.phone}</p>
        <p>{cvData.profile.address}</p>
      </div>
    </div>
  );
}

export default App;
