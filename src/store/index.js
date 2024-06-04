import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { 
  FLUSH, 
  PAUSE, 
  PERSIST, 
  PURGE, 
  REGISTER, 
  REHYDRATE, 
  persistReducer, 
  persistStore 
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createFilter } from 'redux-persist-transform-filter';
import todosReducer from './slices/todoSlice';


const rootReducer = combineReducers({
  data: todosReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['data.email'], 
  whitelist: ['data'], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
