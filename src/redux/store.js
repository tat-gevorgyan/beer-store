import { createStore, applyMiddleware, compose } from 'redux';

// Load middlewares
import thunk from 'redux-thunk';

// rootReducer
import rootReducer from './rootReducer';

const initialState = {};
const middleware = [thunk];
const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    ...enhancers,
  ),
);

export default store;
