import classNames from 'classnames';
import { formatter } from '@helpers';
import { BisectedHexagon } from '../BisectedHexagon';
import { StageIndicatorProps } from './StageIndicator.type';
import style from './StageIndicator.style.module.css';

function StageIndicator({ prize, variant }: StageIndicatorProps) {
  return (
    <li className={classNames(style.container, variant && style[variant])}>
      <BisectedHexagon>
        <div className={style.content}>
          <b className={style.text}>
            {formatter.toDollars(prize)}
          </b>
        </div>
      </BisectedHexagon>
    </li>
  );
}

export default StageIndicator;
