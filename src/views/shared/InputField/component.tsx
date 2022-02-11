import { TextField, TextFieldProps } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import React, { FC } from 'react';
import { useIntl } from 'react-intl';

import { MessageFormat } from 'types';
import useContainer from './useContainer';

import FormattedOrRawMessage from 'views/shared/FormattedOrRawMessage';

type Props = {
  placeholder?: string | MessageFormat;
  label?: string | MessageFormat;
  name: string;
  autoSubmit?: boolean;
} & Omit<TextFieldProps, 'placeholder'>;

const InputField: FC<Props> = ({ placeholder, label, name, autoSubmit, ...props }) => {
  const intl = useIntl();
  const [field, { error, touched }, halpers] = useField(name);
  const formik = useFormikContext<object>();

  autoSubmit && useContainer({ formik, error, touched, value: field.value });
  
  return (
    <TextField
      label={typeof label === 'object' ? intl.formatMessage(label) : label}
      placeholder={typeof placeholder === 'object' ? intl.formatMessage(placeholder) : placeholder}
      error={touched && !!error}
      helperText={touched && !!error && <FormattedOrRawMessage message={error} />}
      {...props}
      {...field}
    />
  );
};

export default InputField;
