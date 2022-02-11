import React, { FC } from 'react';
import { Box, Skeleton, useMediaQuery, useTheme } from '@mui/material';
import { FixedSizeList } from 'react-window';
import { observer } from 'mobx-react-lite';

import {
	PATH_ITEM_HEIGHT,
	OVERSCAN_COUNT,
	SKETELOT_PATH_DESKTOP,
	SKETELOT_PATH_MOBILE
} from 'constants/path';
import useContainer from './useContainer';
import pathsStore from 'store/Paths';
import rangeArray from 'utils/rangeArray';

import PathItem from '../PathItem';

const ListPath: FC = observer(() => {
	const { loading, lenghtPath } = pathsStore;
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('lg'));
	const { heightListPath } = useContainer(matches);
	
	return (
		<Box className="MuiListPath">
			{loading
				? (
					<>
						{rangeArray(matches ? SKETELOT_PATH_MOBILE : SKETELOT_PATH_DESKTOP)
							.map((val) => (
								<Skeleton
									key={val}
									className="MuiListPath__item__skeleton"
								/>
							))}
					</>
				) : (
					<FixedSizeList
						width="100%"
						height={heightListPath}
						itemSize={PATH_ITEM_HEIGHT}
						overscanCount={OVERSCAN_COUNT}
						itemCount={lenghtPath}
					>
						{PathItem}
					</FixedSizeList>
				)}
		</Box>
	);
})

export default ListPath;

