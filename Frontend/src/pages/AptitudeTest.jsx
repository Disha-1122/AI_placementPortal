import { useState } from "react";

function AptitudeTest() {

  const aptitudeQuestions = {

    Frontend: [
      {
        question: "Which hook is used for state management in React?",
        options: ["useEffect", "useState", "useRef", "useMemo"],
        answer: "useState"
      },
      {
        question: "Which HTML tag is used to create hyperlinks?",
        options: ["<a>", "<p>", "<h1>", "<img>"],
        answer: "<a>"
      },
      {
        question: "What does CSS stand for?",
        options: [
          "Creative Style Sheets",
          "Cascading Style Sheets",
          "Computer Style Sheets",
          "Colorful Style Sheets"
        ],
        answer: "Cascading Style Sheets"
      }
    ],

    Backend: [
      {
        question: "Which HTTP method is used to create data?",
        options: ["GET", "POST", "PUT", "DELETE"],
        answer: "POST"
      },
      {
        question: "What is JWT used for?",
        options: [
          "Authentication",
          "Styling",
          "Database",
          "Hosting"
        ],
        answer: "Authentication"
      },
      {
        question: "Which database is NoSQL?",
        options: [
          "MySQL",
          "PostgreSQL",
          "MongoDB",
          "Oracle"
        ],
        answer: "MongoDB"
      }
    ],

    Python: [
      {
        question: "Which symbol is used for comments in Python?",
        options: ["//", "#", "/*", "--"],
        answer: "#"
      },
      {
        question: "What is the output of len('Python')?",
        options: ["5", "6", "7", "8"],
        answer: "6"
      },
      {
        question: "Which data type is mutable?",
        options: ["Tuple", "String", "List", "Integer"],
        answer: "List"
      }
    ],

    Java: [
      {
        question: "What does JVM stand for?",
        options: [
          "Java Virtual Machine",
          "Java Variable Method",
          "Java Visual Machine",
          "Java Verified Machine"
        ],
        answer: "Java Virtual Machine"
      },
      {
        question: "Which keyword is used for inheritance?",
        options: [
          "implements",
          "extends",
          "inherit",
          "super"
        ],
        answer: "extends"
      },
      {
        question: "Which collection stores unique values?",
        options: [
          "ArrayList",
          "LinkedList",
          "Set",
          "Vector"
        ],
        answer: "Set"
      }
    ],

    HR: [
      {
        question: "What is the most important quality of a team player?",
        options: [
          "Communication",
          "Coding",
          "Typing",
          "Designing"
        ],
        answer: "Communication"
      },
      {
        question: "What should you do before an interview?",
        options: [
          "Research Company",
          "Sleep",
          "Watch Movies",
          "Ignore Preparation"
        ],
        answer: "Research Company"
      },
      {
        question: "Professional communication means?",
        options: [
          "Respectful Interaction",
          "Shouting",
          "Arguing",
          "Ignoring"
        ],
        answer: "Respectful Interaction"
      }
    ]
  };

  const [category, setCategory] = useState("Frontend");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const questions = aptitudeQuestions[category];

  const nextQuestion = () => {

    if (!selectedAnswer) {
      alert("Please select an answer.");
      return;
    }

    if (
      selectedAnswer ===
      questions[currentQuestion].answer
    ) {
      setScore(score + 1);
    }

    if (
      currentQuestion < questions.length - 1
    ) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setCompleted(true);
    }
  };

  const progress =
    ((currentQuestion + 1) /
      questions.length) * 100;

  if (completed) {
    return (
      <div className="dashboard-container">

        <div className="aptitude-result">

          <h1>🎉 Test Completed</h1>

          <div className="score-circle">
            {Math.round(
              (score / questions.length) * 100
            )}%
          </div>

          <h2>
            Score: {score} / {questions.length}
          </h2>

          <button
            className="register-btn"
            onClick={() => {
              setCompleted(false);
              setCurrentQuestion(0);
              setScore(0);
              setSelectedAnswer("");
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

      <div className="aptitude-card">

        <h1>🧠 Aptitude Test</h1>

        <select
          className="role-select"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setCurrentQuestion(0);
            setSelectedAnswer("");
            setScore(0);
          }}
        >
          <option value="Frontend">
            Frontend Aptitude
          </option>

          <option value="Backend">
            Backend Aptitude
          </option>

          <option value="Python">
            Python Aptitude
          </option>

          <option value="Java">
            Java Aptitude
          </option>

          <option value="HR">
            HR Aptitude
          </option>
        </select>

        <h3>
          Question {currentQuestion + 1}
          {" / "}
          {questions.length}
        </h3>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${progress}%`
            }}
          ></div>
        </div>

        <div className="question-card">

          <h2>
            {questions[currentQuestion].question}
          </h2>

        </div>

        <div className="options-container">

          {questions[currentQuestion].options.map(
            (option, index) => (
              <label
                key={index}
                className="option-card"
              >
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={
                    selectedAnswer === option
                  }
                  onChange={(e) =>
                    setSelectedAnswer(
                      e.target.value
                    )
                  }
                />

                {option}
              </label>
            )
          )}

        </div>

        <button
          className="register-btn"
          onClick={nextQuestion}
        >
          {currentQuestion ===
          questions.length - 1
            ? "Finish Test"
            : "Next Question"}
        </button>

      </div>

    </div>
  );
}

export default AptitudeTest;