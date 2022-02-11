import { useEffect, useState } from 'react';

import { PathInterface } from 'store/Path';
import { PathsInterface } from 'store/Paths';

type Value = {
	search: string;
};

const useContainer = (pathStore: PathInterface, pathsStore: PathsInterface) => {
	
	const handlerSubmit = (values: Value): void => {
		
		pathStore.createPath({
			id: pathsStore.paths.length + 1,
			length: 10,
			...values,
		});
	};
	
	
	return {
		handlerSubmit,
	};
};

export default useContainer;
