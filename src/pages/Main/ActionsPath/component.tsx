import React, { FC } from 'react';
import { Box } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { LoadingButton } from '@mui/lab';
import { DeleteOutlined, StarOutline, Star } from '@mui/icons-material';

import pathsStore from 'store/Paths';
import pathStore from 'store/Path';
import FormattedOrRawMessage from 'views/shared/FormattedOrRawMessage';

import useContainer from './useContainer';

const ActionsPath: FC = observer(() => {
  if (!pathsStore.activePath) return null;

  const isFavorite = pathsStore.activePath?.favorite || false;
  const { handlerRemove, handlerFavorite } = useContainer(pathsStore, pathStore, isFavorite);

  return (
    <Box className="MuiContainer-main__active-path__action">
      <LoadingButton
        loading={pathStore.loading}
        loadingPosition="start"
        variant="outlined"
        startIcon={isFavorite ? <Star color="warning" /> : <StarOutline color="warning" />}
        onClick={handlerFavorite}
      >
        <FormattedOrRawMessage
          message={{
            id: isFavorite ? 'activePath.btn.remove.favorite' : 'activePath.btn.add.favorite',
          }}
        />
      </LoadingButton>
      <LoadingButton
        loading={pathStore.loading}
        loadingPosition="start"
        variant="outlined"
        color="error"
        sx={{ ml: '30px' }}
        startIcon={<DeleteOutlined />}
        onClick={handlerRemove}
      >
        <FormattedOrRawMessage message={{ id: 'activePath.btn.delete' }} />
      </LoadingButton>
    </Box>
  );
});

export default ActionsPath;
