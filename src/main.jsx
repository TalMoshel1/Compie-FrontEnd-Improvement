import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import photosReducer from './store/photosSlice';
import Header from './cmps/Header';
import HomePage from './pages/HomePage2';

const store = configureStore({
  reducer: {
    photos: photosReducer,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main className="main-element">
          <HomePage />
        </main>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
