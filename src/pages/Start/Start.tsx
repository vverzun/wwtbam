import ThumbsUpIcon from '@assets/thumbs-up.svg';
import { Button } from '@components';
import { useTDispatch } from '@hooks';
import { quizSlice } from '@store';
import style from './Start.style.module.css';

function Start() {
  const dispatch = useTDispatch();

  const handleStartButtonClick = () => {
    dispatch(quizSlice.actions.startQuiz());
  };

  return (
    <main className={style.container}>
      <img className={style.icon} src={ThumbsUpIcon} alt="Thumbs up!" />
      <div className={style.panel}>
        <h1 className={style.headerText}>
          Who Wants to Be a Millionaire?
        </h1>
        <Button onClick={handleStartButtonClick}>
          <span className={style.buttonText}>Start</span>
        </Button>
      </div>
    </main>
  );
}

export default Start;
