import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { theme } from './theme';
import { ThemeProvider } from '@emotion/react';
import { App } from './components/App/App.jsx';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
