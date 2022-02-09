import React, { FC } from 'react';
import { Paper, Typography, Button, Box } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import ROUTER from 'constants/router';
import UserLayout from 'views/layout/UserLayout';
import FormattedOrRawMessage from 'views/shared/FormattedOrRawMessage';

const NotFound: FC = () => (
  <UserLayout
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h1" color="primary">
        <FormattedOrRawMessage message={{ id: 'notFount.title' }} />
      </Typography>
      <Link to={{ pathname: ROUTER.INDEX }}>
        <Button variant="outlined" color="primary" startIcon={<ArrowBack />}>
          <FormattedOrRawMessage message={{ id: 'notFount.btn' }} />
        </Button>
      </Link>
    </Box>
  </UserLayout>
);

export default NotFound;
