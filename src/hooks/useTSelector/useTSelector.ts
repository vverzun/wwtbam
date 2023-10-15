import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '@store';

const useTSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTSelector;
