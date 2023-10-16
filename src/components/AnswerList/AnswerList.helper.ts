import { Answer } from '@store';

const helper = {
  getAnswerPrefix(answerIndex: number, keys: string[]) {
    let prefix = '';
    let pointer = answerIndex;

    while (pointer >= 0) {
      prefix = keys[pointer % keys.length] + prefix;
      pointer = Math.floor(pointer / keys.length) - 1;
    }

    return prefix;
  },
  // [NOTE]: There should be a more elegant
  //         way to handle this logic
  //
  getAnswerVariant(
    answer: Answer,
    selectedAnswer: Answer | null,
    isSelectedAnswerAccepted: boolean,
  ) {
    if (!selectedAnswer) {
      return null;
    }

    if (answer.text === selectedAnswer.text) {
      if (isSelectedAnswerAccepted) {
        return selectedAnswer.isCorrect ? 'correct' : 'incorrect';
      }

      return 'selected';
    }

    if (isSelectedAnswerAccepted) {
      return !selectedAnswer.isCorrect && answer.isCorrect ? 'correct' : null;
    }

    return null;
  },
};

export default helper;
