import theme from 'theme/init';

export default {
  root: {
    '&.MuiInput__space': {
      marginBottom: '36px',
    
      [theme.breakpoints.down('lg')]: {
        marginBottom: '24px',
      },
    },
    
    '&.MuiInput__min-height': {
      '& textarea': {
        minHeight: '50px',
      }
    }
  },
};
