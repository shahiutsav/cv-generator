import "./styles/App.css";
import TextInput from "./components/TextInput";
import SectionContainer from "./components/SectionContainer";
import { useEffect, useState } from "react";

function App() {
  const [openIndex, setOpenIndex] = useState(0);
  const [hasTransition, setHasTransition] = useState(false);

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
          <TextInput labelName="First name" />
          <TextInput labelName="Last name" />
          <TextInput labelName="Email" />
          <TextInput labelName="Phone" />
        </SectionContainer>
        <SectionContainer
          header={"Education"}
          isOpen={openIndex === 1}
          onToggle={() => handleToggle(1)}
          hasTransition={hasTransition}
        >
          <TextInput labelName="School" />
          <TextInput labelName="Degree" />
          <TextInput labelName="Field of study" />
          <TextInput labelName="From" />
          <TextInput labelName="To" />
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
    </div>
  );
}

export default App;
