const Answer = ({
  answerText,
  onSelectAnswer,
  index,
  currentAnswer,
  correctAnswer,
}) => {
  const letterMapping = ["A", "B", "C", "D"];
  const isCorrect = currentAnswer && answerText === correctAnswer;
  const isWrong =
    currentAnswer == answerText && currentAnswer !== correctAnswer;

  const correctAnswerClass = isCorrect ? "correct-answer" : "";
  const wrongAnswerClass = isWrong ? "wrong-answer" : "";
  const disabled = currentAnswer ? "disable-answer" : "";
  return (
    <div
      className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabled}`}
      onClick={() => onSelectAnswer(answerText)}
    >
      <div className="answer-letter">{letterMapping[index]}</div>
      <div className="answer-text" o>
        {answerText}
      </div>
    </div>
  );
};

export default Answer;
