import {
  APP_BAR_HIEGHT,
  CONTAINER_WRAPPER_VERTICAL_PADDING,
  LIST_PATH_VERTICAL_PADDING,
  SEARCH_INPUT,
} from 'constants/screen';

export default (height: number, isMobOfTab = false) => {
  const coficient = isMobOfTab ? 2 : 1;
  const listPaddingMobOfTab = isMobOfTab ? LIST_PATH_VERTICAL_PADDING : 0;
  const heightWithoutLaout = height - (APP_BAR_HIEGHT + CONTAINER_WRAPPER_VERTICAL_PADDING * 2);

  return (
    heightWithoutLaout / coficient -
    (LIST_PATH_VERTICAL_PADDING + SEARCH_INPUT + listPaddingMobOfTab)
  );
};
