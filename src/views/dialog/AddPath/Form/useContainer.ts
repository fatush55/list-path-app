import { useEffect, useState } from 'react';

import { PathInterface } from 'store/Path';
import { PathsInterface } from 'store/Paths';
import { PathItem } from 'types';

const useContainer = (pathStore: PathInterface, pathsStore: PathsInterface) => {
	
	const handlerSubmit = (values: PathItem): void => {
		
		console.log(values)
		
		pathStore.createPath({
			// @ts-ignore
			// id: String(pathsStore.paths.length + 1),
			...values,
		});
	};
	
	
	return {
		handlerSubmit,
	};
};

export default useContainer;
