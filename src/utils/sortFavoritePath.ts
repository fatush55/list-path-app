import { PathItem } from 'types';

export default (a: PathItem, b: PathItem) => {
  if (a.favorite && !b.favorite) {
    return -1;
  }
  if ((b.favorite || a.favorite) && (!b.favorite || !a.favorite)) {
    return 0;
  }

  return 1;
};
