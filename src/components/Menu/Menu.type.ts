import { MouseEvent } from 'react';

export type MenuProps = {
  isVisible: boolean;
  onCloseIconClick: (event: MouseEvent<HTMLButtonElement>) => void;
};
