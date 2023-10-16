import { createSlice } from '@reduxjs/toolkit';
import { quiz } from '@data';
import { QuizState } from './quiz.type';
import helper from './quiz.helper';

const initialState: QuizState = {
  status: 'not-started',
  stages: null,
  prize: 0,
  currentStageIndex: 0,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    startQuiz: (state) => ({
      ...state,
      status: 'in-progress',
      stages: helper.getStages(quiz),
    }),
    claimCurrentStagePrize: (state) => {
      const currentStagePrize = state.stages
        ? state.stages[state.currentStageIndex].prize
        : 0;

      return ({
        ...state,
        prize: currentStagePrize,
      });
    },
    proceedToNextStage: (state) => {
      const nextStageIndex = state.currentStageIndex + 1;

      if (nextStageIndex === state.stages?.length) {
        return ({
          ...state,
          status: 'finished',
        });
      }

      return ({
        ...state,
        currentStageIndex: nextStageIndex,
      });
    },
    endQuiz: (state) => ({
      ...initialState,
      status: 'finished',
      prize: state.prize,
    }),
    resetQuiz: () => ({
      ...initialState,
    }),
  },
});

export default quizSlice;
