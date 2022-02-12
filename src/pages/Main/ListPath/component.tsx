import React, { FC } from 'react';
import { Box, useMediaQuery, useTheme, } from '@mui/material';
import { List } from '@mui/icons-material';
import { FixedSizeList } from 'react-window';
import { observer } from 'mobx-react-lite';

import {
	PATH_ITEM_HEIGHT,
	OVERSCAN_COUNT,
} from 'constants/path';
import useContainer from './useContainer';
import pathsStore from 'store/Paths';
import rangeArray from 'utils/rangeArray';

import Empty from '../Empty';
import Skeleton from '../Skeleton';
import PathItem from '../PathItem';

const ListPath: FC = observer(() => {
	const { loading, lenghtPath } = pathsStore;
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('lg'));
	const { heightListPath } = useContainer(matches);
	
	if (loading) {
		return <Skeleton matches={matches}/>
	}
	
	return (
		<Box className="MuiListPath">
			{!lenghtPath
				? <Empty/>
				: (
					<FixedSizeList
						width="100%"
						height={heightListPath}
						itemSize={PATH_ITEM_HEIGHT}
						overscanCount={OVERSCAN_COUNT}
						itemCount={lenghtPath}
					>
						{PathItem}
					</FixedSizeList>
				)
			}
		</Box>
	);
})

export default ListPath;

