import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './reducers/index';

let store;

function initStore() {
  return createStore(
    RootReducer,
    composeWithDevTools(applyMiddleware()),
  );
}

export const initializeStore = (preloadedState) => {
  let storeLoc = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    storeLoc = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return storeLoc;
  // Create the store once in the client
  if (!store) store = storeLoc;

  return storeLoc;
};

export function useStore(initialStateParameter) {
  return useMemo(() => initializeStore(initialStateParameter), [initialStateParameter]);
}
