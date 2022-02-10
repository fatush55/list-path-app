import theme from 'theme/init';

export default {
  root: {
    '&.MuiContainer-main': {
      height: 'calc(100vh - 64px)',

      '& .MuiContainer-main-wrapper': {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '24px',
        paddingBottom: '24px',
        height: '100%',

        [theme.breakpoints.down('lg')]: {
          flexDirection: 'column',
        },

        '& .MuiContainer-main-path': {
          width: '50%',
          height: '100%',
          paddingRight: '20px',
          paddingBottom: 0,

          [theme.breakpoints.down('lg')]: {
            width: '100%',
            height: '50%',
            paddingBottom: '20px',
            paddingRight: 0,
          },
        },

        '& .MuiContainer-main-map': {
          width: '50%',
          height: '100%',
          paddingLeft: '20px',
          paddingTop: 0,

          [theme.breakpoints.down('lg')]: {
            width: '100%',
            height: '50%',
            paddingTop: '20px',
            paddingLeft: 0,
          },
        },
      },
    },
  },
};
