import React from "react";
import "./MyWork.css";

const MyWork = () => {
  return (
    <div className="mywork-section">
      <h2>My Work</h2>
      <div className="mywork-project">
        <h3>🧾 Employee Dashboard</h3>
        <p>
          During my internship, I developed a responsive{" "}
          <strong>Employee Dashboard</strong> using ReactJS. It allowed managers
          to view, filter, and manage employee data in a clean UI.
        </p>
        <ul>
          <li>✔️ Built reusable components using React</li>
          <li>✔️ Used CSS Flexbox for responsive design</li>
          <li>✔️ Handled state with useState & useEffect</li>
          <li>✔️ Added search/filter functionality with plain JavaScript</li>
        </ul>
        <p>
          <strong>Tech Stack:</strong> HTML, CSS, JavaScript, ReactJS
        </p>
        <a
          href="https://yourdemoapp.netlify.app" 
          target="_blank"
          rel="noreferrer"
        >
         
        </a>
      </div>
    </div>
  );
};

export default MyWork;
