export type QuizState = {
  status: 'not-started' | 'in-progress' | 'finished';
  stages: Stage[] | null;
  prize: number;
  currentStageIndex: number;
};

export type Stage = {
  prize: number;
  question: Question;
};

export type Question = {
  title: string;
  answers: Answer[];
};

export type Answer = {
  text: string;
  isCorrect: boolean;
};
