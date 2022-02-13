import { useEffect } from 'react';

import useDeepCompareMemoize from 'hooks/useDeepCompareMemoize';

const useDeepCompareEffectForMaps = (
	callback: React.EffectCallback,
	dependencies: any[]
) =>  {
	useEffect(callback, dependencies.map(useDeepCompareMemoize));
}

export default useDeepCompareEffectForMaps;
