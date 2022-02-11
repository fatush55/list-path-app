import React, { FC } from 'react';
import { Box, Container, Divider, useMediaQuery, useTheme } from '@mui/material';

import UserLayout from 'views/layout/UserLayout';
import Header from './Header';
import Search from './Search';
import ListPath from './ListPath';

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
          <Box className="MuiContainer-main__map">left</Box>
        </Box>
      </Container>
    </UserLayout>
  );
}

export default Main;
