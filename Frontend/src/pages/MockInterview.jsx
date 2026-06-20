import { useState } from "react";

function MockInterview() {
  const interviewQuestions = {
    Frontend: [
      "What is React?",
      "What is Virtual DOM?",
      "Explain useState.",
      "Explain useEffect.",
      "What is React Router?"
    ],

    Backend: [
      "What is an API?",
      "Difference between GET and POST?",
      "What is FastAPI?",
      "What is Authentication?",
      "What is JWT?"
    ],

    Python: [
      "Difference between List and Tuple?",
      "Explain OOP in Python.",
      "What is a Decorator?",
      "Difference between Flask and FastAPI?",
      "What is Multithreading?"
    ],

    Java: [
      "What is Inheritance?",
      "Difference between Overloading and Overriding?",
      "What is JVM?",
      "Difference between String and StringBuffer?",
      "Explain Encapsulation."
    ],

    HR: [
      "Tell me about yourself.",
      "Why should we hire you?",
      "What are your strengths?",
      "What are your weaknesses?",
      "Where do you see yourself in 5 years?"
    ]
  };

  const [role, setRole] = useState("Frontend");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState("");

  const questions = interviewQuestions[role];

  const nextQuestion = () => {
    if (answer.trim() === "") {
      setError("Please answer the question first.");
      return;
    }

    setError("");

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswer("");
    } else {
      setCompleted(true);
    }
  };

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  if (completed) {
    return (
      <div className="dashboard-container">
        <div className="interview-result">

          <h1>🎉 Interview Completed</h1>

          <h3>Role: {role}</h3>

          <div className="score-circle">
            80%
          </div>

          <p>
            Great effort! Keep practicing and improve
            your technical explanations and confidence.
          </p>

          <button
            className="register-btn"
            onClick={() => {
              setCompleted(false);
              setCurrentQuestion(0);
              setAnswer("");
              setError("");
            }}
          >
            Start Again
          </button>

        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">

      <div className="interview-card">

        <h1>🎤 Mock Interview</h1>

        <select
          className="role-select"
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
            setCurrentQuestion(0);
            setAnswer("");
            setError("");
          }}
        >
          <option value="Frontend">
            Frontend Developer
          </option>

          <option value="Backend">
            Backend Developer
          </option>

          <option value="Python">
            Python Developer
          </option>

          <option value="Java">
            Java Developer
          </option>

          <option value="HR">
            HR Interview
          </option>
        </select>

        <h3>
          Question {currentQuestion + 1} / {questions.length}
        </h3>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${progress}%`
            }}
          ></div>
        </div>

        <p className="question">
          {questions[currentQuestion]}
        </p>

        <textarea
          rows="6"
          placeholder="Type your answer here..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <div className="tip-card">
          💡 Interview Tip: Give detailed answers and explain
          your thought process just like a real interview.
        </div>

        {error && (
          <p
            style={{
              color: "#ff4d4d",
              marginTop: "10px",
              fontWeight: "bold"
            }}
          >
            {error}
          </p>
        )}

        <button
          className="register-btn"
          onClick={nextQuestion}
          disabled={!answer.trim()}
        >
          {currentQuestion === questions.length - 1
            ? "Finish Interview"
            : "Next Question"}
        </button>

      </div>

    </div>
  );
}

export default MockInterview;