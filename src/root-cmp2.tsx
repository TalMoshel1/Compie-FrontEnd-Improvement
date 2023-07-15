import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './cmps/Header';
import HomePage from './pages/Home2';

export function RootCmp() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <main className="main-element">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}