import { LIST_PATH_VERTICAL_PADDING } from 'constants/screen';

export default {
  '.MuiListPath': {
    marginTop: `${LIST_PATH_VERTICAL_PADDING}px`,

    '&__item': {
      '&__path-length': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: '10px',
        width: '100px',
      },

      '&__skeleton': {
        height: '60px !important',
      },
    },
  },
};
