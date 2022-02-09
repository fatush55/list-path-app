import React, { FC, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { MessageFormat, PropsWithoutChildren } from 'types';

type Props = PropsWithoutChildren & {
  message: string | number | MessageFormat;
};

const FormattedOrRawMessage: FC<Props> = ({ message }) => {
  if (typeof message === 'object') {
    return <FormattedMessage {...message} />;
  }
  return <>{message}</>;
};

export default FormattedOrRawMessage;
