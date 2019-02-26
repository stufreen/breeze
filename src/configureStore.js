import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const persistConfig = {
  key: 'breeze-1',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

export default (callback) => {
  const store = createStore(
    persistedReducer,
    composeEnhancers(
      applyMiddleware(thunk),
    ),
  );

  // You can pass a callback to configureStore that's called when store is rehydrated
  const persistor = persistStore(store, null, () => {
    if (typeof callback !== 'undefined') {
      callback(store);
    }
  });

  return { store, persistor };
};
