import Question from "./Question";
import { useContext, useEffect } from "react";
import { QuizContext } from "../context/quiz";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const apiURL =
    "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple&encode=url3986";

  useEffect(() => {
    if (quizState.questions.length > 0 || quizState.error) return;
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "LOADED_QUESTIONS",
          payload: data.results,
        });
      })
      .catch((error) => {
        dispatch({
          type: "SERVER_ERROR",
          payload: error.message,
        });
      });
  });

  return (
    <div className="quiz">
      {quizState.error && (
        <div className="results">
          <div className="congratulations">Error</div>
          <div className="results-info">
            <div>{quizState.error}</div>
          </div>
        </div>
      )}
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Congratulations</div>
          <div className="results-info">
            <div>you have completed the quiz.</div>
            <div>
              you have got {quizState.correctAnswersCount} of{" "}
              {quizState.questions.length}
            </div>
          </div>
          <div
            className="next-button"
            onClick={() => dispatch({ type: "RESTART" })}
          >
            Restart
          </div>
        </div>
      )}
      {!quizState.showResults && quizState.questions.length > 0 && (
        <div>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          <div
            className="next-button"
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            Next Question
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
