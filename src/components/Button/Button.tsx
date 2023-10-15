import { ButtonProps } from './Button.type';
import style from './Button.style.module.css';

function Button({ onClick, children }: ButtonProps) {
  return (
    <button type="button" className={style.container} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
