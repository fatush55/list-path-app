import { useEffect, useState } from 'react';

import { PathInterface } from 'store/Path';
import { PathsInterface } from 'store/Paths';
import { PathItem } from 'types';

const useContainer = (pathStore: PathInterface, pathsStore: PathsInterface) => {
	const values = {
		title: '',
		shortDescription: '',
		fullDescription: '',
		favorite: false,
		distance: 0,
		points: [],
	};
	
	const handlerSubmit = (values: PathItem): void => {
		console.log(values)
		pathStore.createPath({ ...values });
	};
	
	return {
		values,
		handlerSubmit,
	};
};

export default useContainer;
