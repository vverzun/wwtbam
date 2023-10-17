/* eslint-disable import/prefer-default-export */
import { RootState } from '../root';

export const selectQuestion = (state: RootState) => (
  state.quiz.stages
    ? state.quiz.stages[state.quiz.currentStageIndex].question
    : null
);
