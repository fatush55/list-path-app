import React, { FC, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { Wrapper } from '@googlemaps/react-wrapper';
import { observer } from 'mobx-react-lite';

import { GOOGLE_MAP_KEY } from 'constants/common';
import pathsStore from 'store/Paths';
import Map from 'views/shared/Map';

import { DEFAULT_ZOOM, DEFAULT_CENTER } from 'constants/map';

const MapPath: FC = observer(() => {
  if (!pathsStore.activePath && pathsStore.activeId === '') return null;

  if (!pathsStore.activePath && pathsStore.activeId !== '') {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          heightMin: '250px',
          height: '100%',
          width: '100%',
        }}
      >
        <CircularProgress size={50} />
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '250px', height: '100%' }}>
      <Wrapper apiKey={GOOGLE_MAP_KEY}>
        <Map
          points={pathsStore.activePath?.points || []}
          center={DEFAULT_CENTER}
          zoom={DEFAULT_ZOOM}
          style={{ flexGrow: '1', height: '100%' }}
        />
      </Wrapper>
    </Box>
  );
});

export default MapPath;
