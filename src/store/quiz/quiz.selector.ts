import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../root';

export const selectQuiz = (state: RootState) => state.quiz;

export const selectStatus = createSelector(
  [selectQuiz],
  (quiz) => quiz.status,
);

export const selectStages = createSelector(
  [selectQuiz],
  (quiz) => quiz.stages,
);

export const selectPrize = createSelector(
  [selectQuiz],
  (quiz) => quiz.prize,
);

export const selectCurrentStageIndex = createSelector(
  [selectQuiz],
  (quiz) => quiz.currentStageIndex,
);

export const selectQuestion = createSelector(
  [selectStages, selectCurrentStageIndex],
  (stages, currentStageIndex) => (stages ? stages[currentStageIndex].question : null),
);
