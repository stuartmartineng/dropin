import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {rootReducer} from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist'



const loggerMiddleware = createLogger();

const persistConfig = {
    key: 'root',
    storage,
  }
   
  const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(
    persistedReducer,composeWithDevTools(
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
        
    ))
);

export const persistor = persistStore(store);
