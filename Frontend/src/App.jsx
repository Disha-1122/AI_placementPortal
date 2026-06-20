import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import MockInterview from "./pages/MockInterview";
import CodingPractice from "./pages/CoadingPractice";
import AptitudeTest from "./pages/AptitudeTest";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/resume-analyzer"
          element={<ResumeAnalyzer />}
        />

        <Route
          path="/mock-interview"
          element={<MockInterview />}
        />

        <Route
          path="/coding-practice"
          element={<CodingPractice />}
        />

        <Route
          path="/aptitude-test"
          element={<AptitudeTest />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;