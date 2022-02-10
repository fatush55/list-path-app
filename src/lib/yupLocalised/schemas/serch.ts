import yup from '../index';

import { MAX_SEARCHLENGTH } from 'constants/form';

export default yup.object().shape({
  search: yup.string().max(MAX_SEARCHLENGTH),
});
