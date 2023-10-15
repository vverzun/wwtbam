import { quiz } from '@data';

const helper = {
  getStages(stages: typeof quiz) {
    return stages.map((stage) => ({
      prize: stage.prize,
      question: stage.questions[Math.floor(Math.random() * stage.questions.length)],
    }));
  },
};

export default helper;
