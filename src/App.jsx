import "@/styles/App.css";
import { useState } from "react";

import ProfileEditor from "@/components/ProfileEditor/ProfileEditor";
import { BaseTemplate } from "@/components/CV/Templates/Base/BaseTemplate";

function App() {
  const dummyData = {
    profile: {
      firstName: "Anna",
      lastName: "Katerina",
      email: "minimalistbrandstudio@gmail.com",
      phone: "+ 1 041 234 5678",
      address: "Sydney Australia",
      jobTitle: "Software Engineer",
    },
    education: [
      {
        id: 1,
        institution: "ABC University",
        degree: "Bachelor of Science",
        fieldOfStudy: "Computer Science",
        startDate: "2005-01-01",
        endDate: "2008-06-30",
      },
      {
        id: 2,
        institution:
          "XYZ College",
        degree: "High School Diploma",
        fieldOfStudy: "General Education",
        startDate: "2000-01-01",
        endDate: "2004-06-30",
      },
    ],
    work: [
      {
        id: 1,
        company: "XYZ Company",
        position: "Software Engineer",
        startDate: "2015-07-01",
        endDate: "2020-12-31",
      },
    ],
  };

  const [cvData, setCvData] = useState(dummyData);

  return (
    <div className="body">
      <div className="input-section">
        <ProfileEditor data={cvData} setData={setCvData} />
      </div>
      <div className="output-section">
        <BaseTemplate data={cvData} />
      </div>
    </div>
  );
}

export default App;
