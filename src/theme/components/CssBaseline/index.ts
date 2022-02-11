import base from 'theme/components/CssBaseline/base';
import layout from 'theme/components/CssBaseline/layout';
import listPath from 'theme/components/CssBaseline/listPath';

export default {
  MuiCssBaseline: {
    styleOverrides: {
      ...base,
      ...layout,
      ...listPath,
    },
  },
};
