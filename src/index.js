import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import rootReducers from './redux/reducers';
import App from './app';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['core'],
};

const persistedReducers = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducers,
  middleware: [thunk],
});

const persistor = persistStore(store);

function Root() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}

export default Root;
