import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { InputAdornment, Button } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import { observer } from 'mobx-react-lite';

import InputField from 'views/shared/InputField';
import FormikWrapper from 'views/shared/FormikWrapper';
import schema from 'lib/yupLocalised/schemas/serch';
import useDebounce from 'hooks/useDebounts';
import SearchsStore from 'store/Search';

import useContainer from './useContainer';

const Search: FC = observer(() => {
  const { handlerSubmit } = useContainer(SearchsStore);

  return (
    <FormikWrapper values={{ search: '' }} onSubmit={handlerSubmit} schema={schema}>
      <InputField
        fullWidth
        autoSubmit
        id="search"
        name="search"
        variant="outlined"
        placeholder={{ id: 'maim.path.search.placeholder' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlined color="primary" />
            </InputAdornment>
          ),
        }}
      />
    </FormikWrapper>
  );
});

export default Search;
