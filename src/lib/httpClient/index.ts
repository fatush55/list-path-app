import Axios from 'axios';
import qs from 'qs';

import { API_HOST } from 'constants/common';

export default Axios.create({
	baseURL: API_HOST,
	headers: {
		// @ts-ignore
		common: {},
		'X-Client-Device': 'web',
	},
	paramsSerializer: (params: object) => qs.stringify(params, { arrayFormat: 'brackets' }),
});;
