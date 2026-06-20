import { useState } from "react";

function CodingPractice() {
  const codingQuestions = {
    Easy: [
      {
        title: "Two Sum",
        problem:
          "Given an array of integers and a target, return indices of two numbers that add up to the target.",
        hint: "Use a HashMap (Dictionary).",
        solution:
          "Store visited numbers in a dictionary and check if target - current number exists."
      },

      {
        title: "Palindrome Number",
        problem:
          "Check whether a number reads the same forward and backward.",
        hint: "Convert number to string.",
        solution:
          "Reverse the string and compare it with the original."
      }
    ],

    Medium: [
      {
        title: "Longest Substring",
        problem:
          "Find the length of the longest substring without repeating characters.",
        hint: "Use Sliding Window.",
        solution:
          "Maintain a set and adjust the window when duplicates appear."
      },

      {
        title: "Group Anagrams",
        problem:
          "Group words that are anagrams of each other.",
        hint: "Sort characters of each word.",
        solution:
          "Use sorted string as a key in a dictionary."
      }
    ],

    Hard: [
      {
        title: "Merge K Sorted Lists",
        problem:
          "Merge multiple sorted linked lists into one sorted list.",
        hint: "Use Min Heap.",
        solution:
          "Store smallest elements in a priority queue."
      },

      {
        title: "N Queens",
        problem:
          "Place N queens on a chessboard so that none attack each other.",
        hint: "Backtracking.",
        solution:
          "Try each column recursively and backtrack when invalid."
      }
    ]
  };

  const [difficulty, setDifficulty] = useState("Easy");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [userCode, setUserCode] = useState("");

  const questions = codingQuestions[difficulty];

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(0);
    }

    setShowHint(false);
    setShowSolution(false);
    setUserCode("");
  };

  const submitCode = () => {
    if (userCode.trim() === "") {
      alert("Please write your code first!");
      return;
    }

    alert("✅ Code Submitted Successfully!");
  };

  return (
    <div className="dashboard-container">

      <div className="coding-card">

        <h1>💻 Coding Practice</h1>

        <select
          className="coding-select"
          value={difficulty}
          onChange={(e) => {
            setDifficulty(e.target.value);
            setCurrentQuestion(0);
            setShowHint(false);
            setShowSolution(false);
            setUserCode("");
          }}
        >
          <option value="Easy">🟢 Easy</option>
          <option value="Medium">🟡 Medium</option>
          <option value="Hard">🔴 Hard</option>
        </select>

        <h3>
          Question {currentQuestion + 1} / {questions.length}
        </h3>

        <div className="coding-question">
          <h2>{questions[currentQuestion].title}</h2>

          <p>
            {questions[currentQuestion].problem}
          </p>
        </div>

        <div className="code-editor">

          <h3>⌨ Write Your Code</h3>

          <textarea
            rows="12"
            placeholder="Write your solution here..."
            value={userCode}
            onChange={(e) =>
              setUserCode(e.target.value)
            }
          />

        </div>

        <div className="coding-buttons">

          <button
            className="register-btn"
            onClick={submitCode}
          >
            🚀 Submit Code
          </button>

          <button
            className="register-btn"
            onClick={() =>
              setShowHint(!showHint)
            }
          >
            💡 Show Hint
          </button>

          <button
            className="register-btn"
            onClick={() =>
              setShowSolution(!showSolution)
            }
          >
            📘 Show Solution
          </button>

          <button
            className="register-btn"
            onClick={nextQuestion}
          >
            ➡ Next Question
          </button>

        </div>

        {showHint && (
          <div className="hint-card">
            <h3>💡 Hint</h3>

            <p>
              {questions[currentQuestion].hint}
            </p>
          </div>
        )}

        {showSolution && (
          <div className="solution-card">
            <h3>📘 Solution</h3>

            <p>
              {questions[currentQuestion].solution}
            </p>
          </div>
        )}

      </div>

    </div>
  );
}

export default CodingPractice;