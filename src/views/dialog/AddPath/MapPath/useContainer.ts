import { useState } from 'react';
import { useFormikContext } from 'formik';

import { DEFAULT_CENTER, DEFAULT_ZOOM } from "constants/map";
import { Points } from 'types';

const useContainer = () => {
	const formik = useFormikContext<object>();
	const [points, setPoints] = useState<Points[]>([]);
	const [clicks, setClicks] = useState<google.maps.LatLng[]>([]);
	const [zoom, setZoom] = useState(DEFAULT_ZOOM);
	const [center, setCenter] = useState<google.maps.LatLngLiteral>(DEFAULT_CENTER);
	
	const handlerClick = (e: google.maps.MapMouseEvent) => {
		if (!clicks.length) {
			setClicks([...clicks, e.latLng!]);
		}
		if (clicks.length && points.length) {
			setClicks([]);
		}
		
		setPoints([
			...points,
			// @ts-ignore
			{ lat: e.latLng.lat(), lng: e?.latLng.lng() },
		])
	};
	
	const handlerDistance = (distance: number) => {
		formik.setFieldValue('distance', distance);
		formik.setFieldValue('points', points);
	}
	
	console.log(formik)
	
	return {
		zoom,
		clicks,
		points,
		center,
		handlerClick,
		handlerDistance,
	}
}

export default useContainer;
