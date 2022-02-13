import yup from '../index';

import {
	MIN_INPUT_LENGTH,
	MAX_INPUT_LENGTH,
	MIN_TEXTAREA_LENGTH,
	MAX_TEXTAREA_LENGTH,
	MIN_DISTANCE,
} from 'constants/form';

export default yup.object().shape({
	title: yup.string()
		.min(MIN_INPUT_LENGTH)
		.max(MAX_INPUT_LENGTH)
		.required(),
	shortDescription: yup.string()
		.min(MIN_TEXTAREA_LENGTH)
		.max(MAX_TEXTAREA_LENGTH / 4)
		.required(),
	fullDescription: yup.string()
		.min(MIN_TEXTAREA_LENGTH)
		.max(MAX_TEXTAREA_LENGTH)
		.required(),
	distance: yup.number()
		.min(MIN_DISTANCE),
});
