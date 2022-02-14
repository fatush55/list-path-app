import { useRef, useState, useEffect, MutableRefObject } from 'react';

import useDeepCompareEffectForMaps from 'hooks/useDeepCompareEffectForMaps';
import setDirections from 'utils/setDirections';
import { Points } from 'types';
import { DARK_MODE } from 'constants/map';

const useContainer = (
  params: google.maps.MapOptions & { points: Points[]; handlerDistance?: (val: number) => void },
  onClick?: (e: google.maps.MapMouseEvent) => void
) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();
  const { points, handlerDistance, ...options } = params;

  const stepDisplay = new google.maps.InfoWindow();
  const markerArray: google.maps.Marker[] = [];

  const hadlerSetMap = (ref: MutableRefObject<any>, map: google.maps.Map | undefined) => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          styles: DARK_MODE,
        })
      );
    }
  };

  const handlerForMaps = (map: google.maps.Map | undefined) => {
    if (map) {
      map.setOptions(options);
    }
  };

  const handlerClick = (map: google.maps.Map | undefined) => {
    if (map) {
      google.maps.event.clearListeners(map, 'click');

      if (onClick) {
        map.addListener('click', onClick);
      }
    }
  };

  useDeepCompareEffectForMaps(() => {
    handlerForMaps(map);
  }, [map, options]);

  useEffect(() => {
    hadlerSetMap(ref, map);
  }, [ref, map]);

  useEffect(() => {
    handlerClick(map);
  }, [map, onClick]);

  useEffect(() => {
    setDirections(points, map, handlerDistance);
  }, [points, map]);

  return {
    map,
    ref,
  };
};

export default useContainer;
