import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { store, persistor } from 'redux/store'
import { theme } from 'theme';
import { PersistGate } from 'redux-persist/integration/react'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
         <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate> 
        </BrowserRouter>     
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
