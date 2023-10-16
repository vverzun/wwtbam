import { useState } from 'react';
import { Answer, quizSlice } from '@store';
import { useTDispatch } from '../useTDispatch';

const useAnswerController = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
  const [isSelectedAnswerAccepted, setIsSelectedAnswerAccepted] = useState(false);

  const dispatch = useTDispatch();

  const handleAnswerClick = (answer: Answer) => () => {
    setSelectedAnswer(answer);

    setTimeout(() => {
      setIsSelectedAnswerAccepted(true);
      setTimeout(() => {
        if (answer.isCorrect) {
          dispatch(quizSlice.actions.claimCurrentStagePrize());
          dispatch(quizSlice.actions.proceedToNextStage());
        } else {
          dispatch(quizSlice.actions.endQuiz());
        }

        setSelectedAnswer(null);
        setIsSelectedAnswerAccepted(false);
      }, 2000);
    }, 2000);
  };

  return {
    selectedAnswer,
    isSelectedAnswerAccepted,
    handleAnswerClick,
  };
};

export default useAnswerController;
