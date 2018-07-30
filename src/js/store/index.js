import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

export default function configureStore() {
  const logger = createLogger();

  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logger)
  );

  return store;
}
