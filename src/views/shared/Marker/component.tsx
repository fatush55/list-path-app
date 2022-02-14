import React, { FC } from 'react';

import useContainer from './useContainer';

const Marker: FC<google.maps.MarkerOptions> = (props) => {
  useContainer(props);

  return null;
};

export default Marker;
