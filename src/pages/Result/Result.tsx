import ThumbsUpIcon from '@assets/thumbs-up.svg';
import { Button } from '@components';
import { formatter } from '@helpers';
import { useTDispatch, useTSelector } from '@hooks';
import { quizSelector, quizSlice } from '@store';
import style from './Result.style.module.css';

function Result() {
  const prize = useTSelector(quizSelector.selectPrize);
  const dispatch = useTDispatch();

  const handleTryAgainButtonClick = () => {
    dispatch(quizSlice.actions.resetQuiz());
  };

  return (
    <main className={style.container}>
      <img className={style.icon} src={ThumbsUpIcon} alt="Thumbs up!" />
      <div className={style.panel}>
        <h4 className={style.headerText}>Total score:</h4>
        <em className={style.subheaderText}>
          {`${formatter.toDollars(prize)} earned`}
        </em>
        <Button onClick={handleTryAgainButtonClick}>
          <span className={style.buttonText}>Try again</span>
        </Button>
      </div>
    </main>
  );
}

export default Result;
