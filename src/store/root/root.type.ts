import { store } from './root';

export type RootState = ReturnType<typeof store.getState>;

export type Dispatch = typeof store.dispatch;
