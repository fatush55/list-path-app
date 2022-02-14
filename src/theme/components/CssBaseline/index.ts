import base from 'theme/components/CssBaseline/base';
import layout from 'theme/components/CssBaseline/layout';
import listPath from 'theme/components/CssBaseline/listPath';
import map from 'theme/components/CssBaseline/map';

export default {
  MuiCssBaseline: {
    styleOverrides: {
      ...base,
      ...layout,
      ...listPath,
      ...map,
    },
  },
};
