import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import isTheme from './theme/themeReducer';

const themePersistConfig = {
  key: 'theme',
  storage,
  whitelist: ['isTheme'],
};

const store = configureStore({
  reducer: {
    theme: persistReducer(themePersistConfig, isTheme),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };
