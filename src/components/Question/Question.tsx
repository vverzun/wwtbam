import MenuIcon from '@assets/menu.svg';
import { useTSelector } from '@hooks';
import { quizSelector } from '@store';
import { AnswerList } from '../AnswerList';
import { QuestionProps } from './Question.type';
import style from './Question.style.module.css';

function Question({ onMenuIconClick }: QuestionProps) {
  const question = useTSelector(quizSelector.selectQuestion);

  return (
    <main className={style.container}>
      <button
        type="button"
        className={style.icon}
        onClick={onMenuIconClick}
      >
        <img src={MenuIcon} alt="Menu" />
      </button>
      <h3 className={style.text}>
        {question?.title}
      </h3>
      <AnswerList />
    </main>
  );
}

export default Question;
