import { useEffect, useState } from 'react';

import { PathInterface } from 'store/Path';
import { PathsInterface } from 'store/Paths';
import { PathItemWithPoints } from 'types';

const useContainer = (pathStore: PathInterface, pathsStore: PathsInterface) => {
  const values = {
    title: '',
    shortDescription: '',
    fullDescription: '',
    favorite: false,
    distance: 0,
    points: [],
  };

  const handlerSubmit = (values: Omit<PathItemWithPoints, 'id'>): void => {
    pathStore.createPath({ ...values });
  };

  return {
    values,
    handlerSubmit,
  };
};

export default useContainer;
