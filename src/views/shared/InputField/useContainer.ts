import { FormikContextType } from 'formik';
import { useEffect } from 'react';

type Props = {
  formik: FormikContextType<object>;
  error: string | undefined;
  touched: boolean;
  value: string | undefined;
};

const useContainer = ({ formik, error, touched, value }: Props) => {
  const handlerSubmitForm = () => {
    if ((touched && !error) || (value && !error)) {
      formik.submitForm();
    }
  };

  useEffect(() => {
    handlerSubmitForm();
  }, [formik.values, touched]);
};

export default useContainer;
