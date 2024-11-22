import "./styles/App.css";
import TextInput from "./components/TextInput/TextInput";
import SectionContainer from "./components/SectionContainer/SectionContainer";
import { useEffect, useRef, useState } from "react";
import SectionCard from "./components/SectionCard/SectionCard";
import Divider from "./components/Divider/Divider";

function App() {
  const [openIndex, setOpenIndex] = useState(0);
  const [hasTransition, setHasTransition] = useState(false);

  const wrapper = useRef(null);
  const formRef = useRef(null);
  const listRef = useRef(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

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

  useEffect(() => {
    if (isFormOpen) {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
      // Change height accordingly
      wrapper.current.style.maxHeight = formRef.current.scrollHeight + "px";
    } else {
      listRef.current?.scrollIntoView({ behavior: "smooth" });
      // Change height accordingly
      wrapper.current.style.maxHeight = listRef.current.scrollHeight + "px";
    }
  }, [isFormOpen]);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  return (
    <div className="body">
      <div className="input-section">
        <SectionContainer
          header={"Profile"}
          isOpen={openIndex === 0}
          onToggle={() => handleToggle(0)}
          hasTransition={hasTransition}
        >
          <div
            style={{
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
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
          </div>
        </SectionContainer>
        <SectionContainer
          header={"Education"}
          isOpen={openIndex === 1}
          onToggle={() => handleToggle(1)}
          hasTransition={hasTransition}
        >
          <div
            style={{
              display: "flex",
              width: "200%",
            }}
            ref={wrapper}
          >
            <div className="crud-list" ref={listRef}>
              <div>
                {cvData.education.map((edu, index) => (
                  <div key={index}>
                    <SectionCard title={edu.institution} />
                    {index !== cvData.education.length - 1 && <Divider />}
                  </div>
                ))}
              </div>
              <button onClick={handleOpenForm}>Add education</button>
            </div>
            <div className="crud-form" ref={formRef}>
              <TextInput labelName="School" />
              <TextInput labelName="Degree" />
              <TextInput labelName="Field of study" />
              <TextInput labelName="From" />
              <TextInput labelName="To" />

              <div className="actions">
                <button onClick={() => setIsFormOpen(false)}>Cancel</button>
                <button onClick={() => setIsFormOpen(false)}>Submit</button>
              </div>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer
          header={"Experience"}
          isOpen={openIndex === 2}
          onToggle={() => handleToggle(2)}
          hasTransition={hasTransition}
        >
          <TextInput labelName="Job title" />
          <TextInput labelName="Company" />
          <TextInput labelName="From" />
          <TextInput labelName="To" />{" "}
        </SectionContainer>
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
