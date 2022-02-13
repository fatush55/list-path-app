import React, { FC, Children } from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import { GOOGLE_MAP_KEY } from 'constants/common';

import useContainer from './useContainer';
import { Points } from 'types';

interface MapProps extends google.maps.MapOptions {
	style: { [key: string]: string };
	onClick?: (e: google.maps.MapMouseEvent) => void;
	onIdle?: (map: google.maps.Map) => void;
	points: Points[];
	handlerDistance?: (val: number) => void,
}

const Map: FC<MapProps> = ({
 onClick,
 onIdle,
 children,
 style,
 ...options
}) => {
	const { ref, map } = useContainer(options, onClick);
	
	return (
		<>
			<div ref={ref} style={style} />
			{Children.map(children, (child) => {
				if (React.isValidElement(child)) {
					// set the map prop on the child component
					return React.cloneElement(child, { map });
				}
			})}
		</>
	);
};

export default Map;
