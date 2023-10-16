import { MouseEvent } from 'react';

export type AnswerProps = {
  variant: 'selected' | 'incorrect' | 'correct' | null;
  prefix: string;
  text: string;
  disabled: boolean;
  onAnswerClick: (event: MouseEvent<HTMLButtonElement>) => void;
};
