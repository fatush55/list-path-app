import useDebounce from 'hooks/useDebounts';
import { useEffect, useState } from 'react';

import { SearchInterface } from 'store/Search';

type Value = {
  search: string;
};

const useContainer = (Search: SearchInterface) => {
  const [value, setValue] = useState<string | null>(null);
  const debouncedValue = useDebounce(value);

  const handlerAction = (search: string | null) => {
    if (search) {
      Search.changeSearch(search);
    }
  };

  const handlerSubmit = (values: Value): void => {
    setValue(values.search);
  };

  useEffect(() => {
    handlerAction(value);
  }, [debouncedValue]);

  return {
    handlerSubmit,
  };
};

export default useContainer;
