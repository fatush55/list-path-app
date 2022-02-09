import base from 'theme/components/CssBaseline/base';
import layout from 'theme/components/CssBaseline/layout';

export default {
  MuiCssBaseline: {
    styleOverrides: {
      ...base,
      ...layout,
    },
  },
};
