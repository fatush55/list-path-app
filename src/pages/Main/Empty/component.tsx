import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { List } from '@mui/icons-material';

import FormattedOrRawMessage from 'views/shared/FormattedOrRawMessage';

const Empty: FC = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '24px',
    }}
  >
    <List color="warning" fontSize="large" />
    <Typography variant="h4" sx={{ ml: '20px' }}>
      <FormattedOrRawMessage message="Path list is empty" />
    </Typography>
  </Box>
);

export default Empty;
