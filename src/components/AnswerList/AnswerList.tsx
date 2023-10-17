import { useAnswerController, useTSelector } from '@hooks';
import { quizSelector } from '@store';
import { Answer } from '../Answer';
import CONSTANT from './AnswerList.constant';
import helper from './AnswerList.helper';
import style from './AnswerList.style.module.css';

function AnswerList() {
  const answers = useTSelector((state) => (
    quizSelector.selectQuestion(state)?.answers ?? null
  ));

  const {
    selectedAnswer,
    isSelectedAnswerAccepted,
    handleAnswerClick,
  } = useAnswerController();

  return (
    <ol className={style.container}>
      {answers?.map((answer, answerIndex) => (
        <Answer
          key={answer.text}
          variant={helper.getAnswerVariant(answer, selectedAnswer, isSelectedAnswerAccepted)}
          prefix={helper.getAnswerPrefix(answerIndex, CONSTANT.ALPHABET)}
          text={answer.text}
          disabled={!!selectedAnswer}
          onAnswerClick={handleAnswerClick(answer)}
        />
      ))}
    </ol>
  );
}

export default AnswerList;
