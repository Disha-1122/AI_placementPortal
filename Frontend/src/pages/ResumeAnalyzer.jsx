import { useState } from "react";
import axios from "axios";
import {
  FaFileUpload,
  FaCheckCircle,
  FaTimesCircle,
  FaLightbulb,
  FaChartLine
} from "react-icons/fa";

function ResumeAnalyzer() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a PDF file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/upload-resume",
        formData
      );

      setResult(response.data);

    } catch (error) {
      console.error(error);
      alert("Upload Failed");
    }
  };

  return (
    <div className="resume-container">

      <h1>📄 ATS Resume Analyzer</h1>

      <div className="upload-card">

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          className="register-btn"
          onClick={handleUpload}
        >
          <FaFileUpload />
          &nbsp; Analyze Resume
        </button>

      </div>

      {result && (

        <div className="analysis-grid">

          <div className="analysis-card score-card">
            <FaChartLine size={35} />
            <h2>ATS Score</h2>
            <h1>{result.score}%</h1>
          </div>

          <div className="analysis-card">
            <FaCheckCircle size={30} color="lightgreen" />
            <h2>Skills Found</h2>

            {result.skills_found?.length > 0 ? (
              result.skills_found.map((skill, index) => (
                <span
                  key={index}
                  className="skill-badge"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p>No Skills Found</p>
            )}
          </div>

          <div className="analysis-card">
            <FaTimesCircle size={30} color="#ff5c5c" />
            <h2>Missing Skills</h2>

            {result.missing_skills?.length > 0 ? (
              result.missing_skills.map((skill, index) => (
                <span
                  key={index}
                  className="missing-badge"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p>No Missing Skills</p>
            )}
          </div>

          <div className="analysis-card">
            <FaLightbulb size={30} color="#ffd700" />
            <h2>Suggestions</h2>

            <ul>
              {result.suggestions?.map(
                (item, index) => (
                  <li key={index}>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="analysis-card">
            <h2>Resume Statistics</h2>

            <p>
              Characters: {result.characters}
            </p>

            <p>
              ATS Readability:
              {result.score > 70
                ? " Excellent"
                : " Needs Improvement"}
            </p>
          </div>

        </div>

      )}

    </div>
  );
}

export default ResumeAnalyzer;