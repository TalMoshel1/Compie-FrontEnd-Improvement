import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from './cmps/Header';
import HomePage from './pages/HomePage';



ReactDOM.createRoot(document.getElementById('root')).render(
      <BrowserRouter>
        <Header />
        <main className="main-element">
          <HomePage />
        </main>
      </BrowserRouter>
);
