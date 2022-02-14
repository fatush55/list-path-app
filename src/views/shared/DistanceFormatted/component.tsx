import React, { FC } from 'react';

import { KILOMETER } from 'constants/map';
import calcDistanceInKm from 'utils/calcDistanceInKm';
import FormattedOrRawMessage from 'views/shared/FormattedOrRawMessage';

type Props = {
  value: number;
  short?: boolean;
};

const DistanceFormatted: FC<Props> = ({ value, short = true }) => {
  const prefixId = short ? 'shared' : 'shared.lenght';

  return (
    <>
      {value >= KILOMETER ? (
        <FormattedOrRawMessage
          message={{ id: `${prefixId}.km`, values: { val: calcDistanceInKm(value) } }}
        />
      ) : (
        <FormattedOrRawMessage message={{ id: `${prefixId}.met`, values: { val: value } }} />
      )}
    </>
  );
};

export default DistanceFormatted;
