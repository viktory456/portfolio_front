import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { api } from './features/api/api';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


store.dispatch(api.endpoints.getSkills.initiate());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

