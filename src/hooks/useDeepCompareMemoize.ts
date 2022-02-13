import { useRef } from 'react';

import deepCompareEqualsForMaps from 'utils/deepCompareEqualsForMaps';

const useDeepCompareEffectForMaps = (value: any) => {
	const ref = useRef();
	
	if (!deepCompareEqualsForMaps(value, ref.current)) {
		ref.current = value;
	}
	
	return ref.current;
}

export default useDeepCompareEffectForMaps;
