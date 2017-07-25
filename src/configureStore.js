import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducer'
import thunk from 'redux-thunk'


// Configures the redux store with thunk middleware for async calls
export default function configureStore(initialState) {
  // Adds redux devtools capabilities
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk)
    )
  );
}
