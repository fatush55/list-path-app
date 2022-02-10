import { createTheme, Theme } from '@mui/material';

import typography from 'theme/typography';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography,
}) as Theme;

export default theme;
