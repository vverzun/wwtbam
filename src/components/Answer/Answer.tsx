import classNames from 'classnames';
import { BisectedHexagon } from '../BisectedHexagon';
import { AnswerProps } from './Answer.type';
import style from './Answer.style.module.css';

function Answer({
  variant,
  prefix,
  text,
  disabled,
  onAnswerClick,
}: AnswerProps) {
  return (
    <li>
      <button
        type="button"
        disabled={disabled}
        className={classNames(style.container, variant && style[variant])}
        onClick={onAnswerClick}
      >
        <BisectedHexagon>
          <div className={style.content}>
            <em className={style.prefix}>{prefix}</em>
            <b className={style.text}>{text}</b>
          </div>
        </BisectedHexagon>
      </button>
    </li>
  );
}

export default Answer;
