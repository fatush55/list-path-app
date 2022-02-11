import React, { FC } from 'react';
import { Box, Typography, AppBar, Toolbar, Button } from '@mui/material';
import { AddLocation, ControlCamera } from '@mui/icons-material';

import FormattedOrRawMessage from 'views/shared/FormattedOrRawMessage';

const Header: FC = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <ControlCamera sx={{ marginRight: '10px' }} color="primary" fontSize="large" />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <FormattedOrRawMessage message={{ id: 'maim.header.title' }} />
        </Typography>
        <Button color="primary" variant="outlined" startIcon={<AddLocation />}>
          <FormattedOrRawMessage message={{ id: 'maim.header.btn' }} />
        </Button>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;
