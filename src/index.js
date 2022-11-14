import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { theme } from './theme';
import { ThemeProvider } from '@emotion/react';
import { App } from './components/App/App.jsx';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </Provider>
      </PersistGate>
    </BrowserRouter>
  </React.StrictMode>
);
