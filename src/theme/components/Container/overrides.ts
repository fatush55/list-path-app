import theme from 'theme/init';

import { CONTAINER_WRAPPER_VERTICAL_PADDING } from 'constants/screen';

export default {
  root: {
    '&.MuiContainer-main': {
      height: 'calc(100vh - 64px)',
      
      '&--dialog': {
        height: 'calc(100vh - 120px)',
      },

      '& .MuiContainer-main__wrapper': {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: `${CONTAINER_WRAPPER_VERTICAL_PADDING}px`,
        paddingBottom: `${CONTAINER_WRAPPER_VERTICAL_PADDING}px`,
        height: '100%',

        [theme.breakpoints.down('lg')]: {
          flexDirection: 'column',
        },

        '& .MuiContainer-main__path': {
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

        '& .MuiContainer-main__map, & .MuiContainer-main__active-path': {
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
        
        '& .MuiContainer-main__active-path': {
          display: 'flex',
          flexDirection: 'column',
          
          '&--scroll': {
            overflow: 'scroll',
          },
          
          '&__action': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: '100%',
            marginTop: '24px',
          },
          
          '&__info': {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            
            '&__header': {
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            },
          }
        }
      },
    },
    
    '& .MuiContainer-path-dialog': {
      height: 'auto',
      
      [theme.breakpoints.down('lg')]: {
        overflow: 'scroll',
        height: 'calc(50vh - 90px)',
      },
      
      '&__lenght': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50px'
      }
    }
  },
};
