import { createTheme } from '@mui/material';

import typography from 'theme/typography';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography,
});

export default theme;
