import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { IntlProvider } from 'react-intl';
import '@fontsource/roboto';

import App from 'App';
import enLocale from 'locales/en';
import theme from 'theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <IntlProvider {...enLocale}>
        <CssBaseline />
        <App />
      </IntlProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
