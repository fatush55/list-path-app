import { maxString, minString } from 'types';

export default {
  string: {
    min: ({ min }: minString) => ({ id: 'yup.string.min', values: { min } }),
    max: ({ max }: maxString) => ({ id: 'yup.string.max', values: { max } }),
  },
};
