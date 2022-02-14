import { PathsInterface } from 'store/Paths';

const useContainer = (id: string, pathsStore: PathsInterface) => {
  const handlerClick = () => {
    pathsStore.active = id;
  };

  return {
    handlerClick,
  };
};

export default useContainer;
