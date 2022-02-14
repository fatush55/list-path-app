import theme from 'theme/init';
import { grey } from '@mui/material/colors';

import { PATH_ITEM_HEIGHT_WITH_PADDING } from 'constants/path';
import { hoverNormal } from 'theme/transition';

export default {
  root: {
    background: grey[800],
    height: `${PATH_ITEM_HEIGHT_WITH_PADDING}px`,
    border: 'none',

    '&.MuiListPath__item': {
      '&--active': {
        border: `1px solid ${theme.palette.primary.main}`,
        transition: hoverNormal,
      },
    },
  },
};
