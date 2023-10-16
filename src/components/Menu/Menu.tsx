import CloseIcon from '@assets/close.svg';
import classNames from 'classnames';
import { StageIndicatorList } from '../StageIndicatorList';
import { MenuProps } from './Menu.type';
import style from './Menu.style.module.css';

function Menu({
  isVisible,
  onCloseIconClick,
}: MenuProps) {
  return (
    <aside className={classNames(style.container, isVisible && style.visible)}>
      <button
        type="button"
        className={style.icon}
        onClick={onCloseIconClick}
      >
        <img src={CloseIcon} alt="Close" />
      </button>
      <StageIndicatorList />
    </aside>
  );
}

export default Menu;
