import { Typography, Box } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import { MapTwoTone } from '@mui/icons-material';
import React, { FC } from 'react';
import { useIntl } from 'react-intl';

import { MessageFormat } from 'types';

import FormattedOrRawMessage from 'views/shared/FormattedOrRawMessage';

type Props = {
  label?: string | MessageFormat;
  name: string;
};

const DistanceField: FC<Props> = ({ label, name, ...props }) => {
  const intl = useIntl();
  const [{ value }, { error }, halpers] = useField(name);
  const formik = useFormikContext<object>();

  return (
    <Box className="MuiContainer-path-dialog__lenght">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MapTwoTone
          color={error ? 'error' : 'warning'}
          fontSize="large"
          sx={{ mr: '10px' }}
        />
        <Typography variant="body1">
          <FormattedOrRawMessage
            message={{ id: 'shared.lenght.km', values: { val: value } }}
          />
        </Typography >
      </Box>
      {error && (
        <Typography variant="caption" color="error" sx={{ mt: '12px' }}>
          <FormattedOrRawMessage message={error}/>
        </Typography>
      )}
    </Box>
  );
};

export default DistanceField;
