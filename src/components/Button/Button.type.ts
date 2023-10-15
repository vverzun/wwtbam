import { MouseEvent, ReactNode } from 'react';

export type ButtonProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
};
