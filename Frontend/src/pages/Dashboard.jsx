import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>🚀 AI Placement Portal</h1>

      <p>
        Welcome to your placement preparation dashboard.
      </p>

      <div className="dashboard-cards">

        <Link
          to="/resume-analyzer"
          style={{ textDecoration: "none" }}
        >
          <div className="dashboard-card">
            <h2>📄 Resume Analyzer</h2>
            <p>
              Analyze your resume and get AI-powered suggestions.
            </p>
          </div>
        </Link>

        <Link
          to="/mock-interview"
          style={{ textDecoration: "none" }}
        >
          <div className="dashboard-card">
            <h2>🎤 Mock Interview</h2>
            <p>
              Practice HR and technical interviews with AI.
            </p>
          </div>
        </Link>

        <Link
          to="/coding-practice"
          style={{ textDecoration: "none" }}
        >
          <div className="dashboard-card">
            <h2>💻 Coding Practice</h2>
            <p>
              Solve coding questions and improve your DSA skills.
            </p>
          </div>
        </Link>

        <Link
          to="/aptitude-test"
          style={{ textDecoration: "none" }}
        >
          <div className="dashboard-card">
            <h2>🧠 Aptitude Test</h2>
            <p>
              Prepare for quantitative, logical and verbal aptitude.
            </p>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Dashboard;