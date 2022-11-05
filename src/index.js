import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { FeedbackContextProvider } from 'components/FeedbackContext/FeedbackContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FeedbackContextProvider>
      <App />
    </FeedbackContextProvider>
  </React.StrictMode>
);
