import React, { FC } from 'react';
import { Skeleton as MuiSkeleton } from '@mui/material';
import rangeArray from 'utils/rangeArray';

import { SKETELOT_PATH_DESKTOP, SKETELOT_PATH_MOBILE } from 'constants/path';

type Props = {
	matches: boolean;
}

const Skeleton: FC<Props> = ({ matches }) => (
	<>
		{rangeArray(matches ? SKETELOT_PATH_MOBILE : SKETELOT_PATH_DESKTOP)
			.map((val) => (
				<MuiSkeleton
					key={val}
					className="MuiListPath__item__skeleton"
				/>
			))}
	</>
);

export default Skeleton;
