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
          "XYZ College random names of institution to see if the text truncates",
        degree: "High School Diploma",
        fieldOfStudy: "General Education",
        startDate: "2000-01-01",
        endDate: "2004-06-30",
      },
      {
        id: 3,
        institution: "XYZ College",
        degree: "High School Diploma",
        fieldOfStudy: "General Education",
        startDate: "2000-01-01",
        endDate: "2004-06-30",
      },
      {
        id: 4,
        institution: "XYZ College",
        degree: "High School Diploma",
        fieldOfStudy: "General Education",
        startDate: "2000-01-01",
        endDate: "2004-06-30",
      },
      {
        id: 5,
        institution: "XYZ College",
        degree: "High School Diploma",
        fieldOfStudy: "General Education",
        startDate: "2000-01-01",
        endDate: "2004-06-30",
      },
      {
        id: 6,
        institution: "XYZ College",
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
      {
        id: 1,
        company: "XYZ Company",
        position: "Software Engineer",
        startDate: "2015-07-01",
        endDate: "2020-12-31",
      },

      {
        id: 1,
        company: "XYZ Company",
        position: "Software Engineer",
        startDate: "2015-07-01",
        endDate: "2020-12-31",
      },

      {
        id: 1,
        company: "XYZ Company",
        position: "Software Engineer",
        startDate: "2015-07-01",
        endDate: "2020-12-31",
      },
      {
        id: 1,
        company: "XYZ Company",
        position: "Software Engineer",
        startDate: "2015-07-01",
        endDate: "2020-12-31",
      },

      {
        id: 1,
        company: "XYZ Company",
        position: "Software Engineer",
        startDate: "2015-07-01",
        endDate: "2020-12-31",
      },
      {
        id: 1,
        company: "XYZ Company",
        position: "Software Engineer",
        startDate: "2015-07-01",
        endDate: "2020-12-31",
      },
      {
        id: 1,
        company: "XYZ Company",
        position: "Software Engineer",
        startDate: "2015-07-01",
        endDate: "2020-12-31",
      },
    ],
    projects: [
      {
        id: 1,
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
        {cvData.education.map((edu, index) => (
          <div key={index}>
            <h3>{edu.institution}</h3>
            <p>{edu.degree}</p>
            <p>{edu.fieldOfStudy}</p>
            <p>{edu.startDate}</p>
            <p>{edu.endDate}</p>
          </div>
        ))}
        {cvData.work.map((work, index) => (
          <div key={index}>
            <h3>{work.company}</h3>
            <p>{work.position}</p>
            <p>{work.startDate}</p>
            <p>{work.endDate}</p>
          </div>
        ))}
        {cvData.projects.map((project, index) => (
          <div key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>{project.startDate}</p>
            <p>{project.endDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
