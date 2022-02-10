import React, { FC } from 'react';
import { Box, Container, Divider } from '@mui/material';

import UserLayout from 'views/layout/UserLayout';
import Header from './Header';
import Search from './Search';

const Main: FC = () => (
  <UserLayout>
    <Header />
    <Container className="MuiContainer-main">
      <Box className="MuiContainer-main-wrapper">
        <Box className="MuiContainer-main-path">
          <Search />
        </Box>
        <Divider orientation="vertical" />
        <Box className="MuiContainer-main-map">left</Box>
      </Box>
    </Container>
  </UserLayout>
);

export default Main;
