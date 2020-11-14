import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

export const ConfigureStore = () => {
  const Store = createStore(
    Reducer,
    winitialState
  );

  return Store;
}
