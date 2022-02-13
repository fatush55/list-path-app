import React, { FC } from 'react';
import { Box, Container, Divider, useMediaQuery, useTheme } from '@mui/material';
import classnames from 'classnames';

import UserLayout from 'views/layout/UserLayout';
import AddPathDialog from 'views/dialog/AddPath';

import Header from './Header';
import Search from './Search';
import ListPath from './ListPath';
import ActionsPath from './ActionsPath';
import InfoPath from './InfoPath';
import MapPath from './MapPath';

const Main: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('lg'));
  
  return  (
    <UserLayout>
      <Header />
      <Container className="MuiContainer-main">
        <Box className="MuiContainer-main__wrapper">
          <Box className="MuiContainer-main__path">
            <Search />
            <ListPath/>
          </Box>
          <Divider orientation={matches ? 'horizontal' : 'vertical'} />
          <Box
            className={classnames('MuiContainer-main__active-path', {
              'MuiContainer-main__active-path--scroll': matches
            })}
          >
            <InfoPath/>
            <MapPath />
            <ActionsPath />
          </Box>
        </Box>
      </Container>
      <AddPathDialog />
    </UserLayout>
  );
}

export default Main;
