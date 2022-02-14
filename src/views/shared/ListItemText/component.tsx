import { ListItemText as MuiListItemText } from '@mui/material';
import React, { FC } from 'react';

import FormattedOrRawMessage from 'views/shared/FormattedOrRawMessage';
import { MessageFormat } from 'types';

type Props = {
  primary: string | MessageFormat;
  secondary?: string | MessageFormat;
};

const ListItemText: FC<Props> = ({ primary, secondary }) => (
  <MuiListItemText
    primary={<FormattedOrRawMessage message={primary} />}
    secondary={secondary ? <FormattedOrRawMessage message={secondary} /> : null}
  />
);

export default ListItemText;
