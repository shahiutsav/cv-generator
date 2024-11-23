import "@/styles/App.css";
import { useState } from "react";

import ProfileEditor from "./components/ProfileEditor/ProfileEditor";

function App() {
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

  return (
    <div className="body">
      <div className="input-section">
        <ProfileEditor data={cvData} setData={setCvData} />
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
