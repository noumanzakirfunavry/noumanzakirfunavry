
import { configureStore } from '@reduxjs/toolkit';
import Reducer from '../reducers/Reducer';
import { useDispatch } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist
import storage from 'redux-persist/lib/storage'

const persistConfig = { // configuration object for redux-persist
  key: 'root',
  storage, // define which storage to use
}

const persistedReducer = persistReducer(persistConfig, Reducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const  persistor = persistStore(store);

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export {store, persistor};

export type RootState = ReturnType<typeof store.getState>
