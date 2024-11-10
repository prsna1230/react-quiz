export const shuffleAnswers = (question) => {
  const unshuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];

  return unshuffledAnswers
    .map((answer) => ({
      value: answer,
      sort: Math.random(),
    }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};
