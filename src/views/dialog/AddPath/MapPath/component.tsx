import React, { FC } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { observer } from 'mobx-react-lite';

import { GOOGLE_MAP_KEY } from 'constants/common';
import pathsStore from 'store/Paths';
import Map from 'views/shared/Map';
import Marker from 'views/shared/Marker';

import useContainer from './useContainer';

const MapPath: FC = observer(() => {
	const { points, center, zoom, clicks, handlerClick, handlerDistance  } = useContainer()
	
	return (
		<Wrapper apiKey={GOOGLE_MAP_KEY}>
			<Map
				points={points}
				center={center}
				handlerDistance={handlerDistance}
				onClick={handlerClick}
				zoom={zoom}
				style={{ flexGrow: "1", height: "100%" }}
			>
				{clicks.map((latLng, i) => (
					<Marker key={i} position={latLng} />
				))}
			</Map>
		</Wrapper>
	);
});

export default MapPath;
