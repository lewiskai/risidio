import { useDispatch } from 'react-redux'
import { store } from '.';

export const useAppDispatch = () => useDispatch()
export type RootState = ReturnType<typeof store.getState>;
