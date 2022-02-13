import { useState } from "react";

import { Points } from 'types';

const useContainer = () => {
	const [points, setPoints] = useState<Points[]>([]);
	const [clicks, setClicks] = useState<google.maps.LatLng[]>([]);
	const [zoom, setZoom] = useState(3);
	const [center, setCenter] = useState<google.maps.LatLngLiteral>({
		lat: 0,
		lng: 0,
	});
	
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
	
	return {
		points,
		center,
		handlerClick,
		zoom,
		clicks
	}
}

export default useContainer;
