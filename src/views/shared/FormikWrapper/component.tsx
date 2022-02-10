import React, { FC } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';

import schema from 'lib/yupLocalised/schemas/serch';

type Props = {
  schema?: any;
  values: object;
  onSubmit: (values: any, formikHelpers: FormikHelpers<object>) => void | Promise<any>;
};

const FormikWrapper: FC<Props> = ({ children, values, schema, onSubmit }) => (
  <Formik initialValues={values} validationSchema={schema} onSubmit={onSubmit}>
    {() => <Form>{children}</Form>}
  </Formik>
);

export default FormikWrapper;
