import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import ReactModal from 'react-modal';
import store from './redux/store';
import 'scss/app.scss';
import App from './app/index';

ReactModal.setAppElement('#root');
const snackOpts = { vertical: 'top', horizontal: 'right' };

render(
  <Provider store={store}>
    <SnackbarProvider maxSnack={3} anchorOrigin={snackOpts} autoHideDuration={3000}>
      <App />
    </SnackbarProvider>
  </Provider>,
  document.getElementById('root'),
);
