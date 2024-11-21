import "./styles/App.css";
import TextInput from "./components/TextInput/TextInput";
import SectionContainer from "./components/SectionContainer/SectionContainer";
import { useEffect, useState } from "react";

function App() {
  const [openIndex, setOpenIndex] = useState(0);
  const [hasTransition, setHasTransition] = useState(false);

  const [cvData, setCvData] = useState({
    profile: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
    },
    education: [],
    experience: [],
    projects: [],
  });

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
        <SectionContainer
          header={"Profile"}
          isOpen={openIndex === 0}
          onToggle={() => handleToggle(0)}
          hasTransition={hasTransition}
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
        </SectionContainer>
        <SectionContainer
          header={"Education"}
          isOpen={openIndex === 1}
          onToggle={() => handleToggle(1)}
          hasTransition={hasTransition}
        >
          {/* <div className="education-list">
            <button>Add education</button>
            {cvData.education.map((edu, index) => (
              <div key={index}>
                <TextInput labelName="School" />
                <TextInput labelName="Degree" />
                <TextInput labelName="Field of study" />
                <TextInput labelName="From" />
                <TextInput labelName="To" />
              </div>
            ))}
          </div> */}
          {/* <div className="add-education"> */}
            <TextInput labelName="School" />
            <TextInput labelName="Degree" />
            <TextInput labelName="Field of study" />
            <TextInput labelName="From" />
            <TextInput labelName="To" />
          {/* </div> */}
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
