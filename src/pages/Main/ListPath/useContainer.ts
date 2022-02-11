import { useCallback, useState, useEffect } from 'react';
import { useWindowSize } from '@react-hook/window-size'

import calcHeightListPath from 'utils/calcHeightListPath';

const useContainer = (matches: boolean) => {
	const [window, height] = useWindowSize();
	const [heightListPath, setHeightListPath] = useState<number>(calcHeightListPath(height, matches));
	
	useEffect(() => {
		setHeightListPath(calcHeightListPath(height, matches))
	}, [height, matches]);
	
	return {
		heightListPath,
	}
};

export default useContainer;
