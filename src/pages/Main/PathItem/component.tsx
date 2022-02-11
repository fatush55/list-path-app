import React, { FC } from 'react';
import {
	Box,
	Avatar,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	Typography,
} from '@mui/material';
import { ChevronRightOutlined, Directions } from '@mui/icons-material';
import { ListChildComponentProps } from 'react-window';
import { observer } from 'mobx-react-lite';
import classnames from 'classnames';

import ListItemText from 'views/shared/ListItemText';
import FormattedOrRawMessage from 'views/shared/FormattedOrRawMessage';
import pathsStore from 'store/Paths';

import useContainer from './useContainer';

const PathItem: FC<ListChildComponentProps> = observer((props) => {
	const { index, style } = props;
	const { id, length, title, shortDescription } = pathsStore.pathIndex(index);
	const { handlerClick } = useContainer(id, pathsStore);
	
	return (
		<Box style={style} key={id}>
			<ListItem 
				disablePadding
				className={classnames({ 'MuiListPath__item--active': pathsStore.activeId === id })}
			>
				<ListItemButton onClick={handlerClick}>
					<ListItemAvatar>
						<Avatar>
							<Directions color="warning" />
						</Avatar>
					</ListItemAvatar>
					<ListItemText
						primary={title}
						secondary={shortDescription}
					/>
					<Box className="MuiListPath__item__path-length">
						<Typography variant="body2">
							<FormattedOrRawMessage
								message={{ id: 'shared.km', values: { val: length } }}
							/>
						</Typography>
						<ChevronRightOutlined/>
					</Box>
				</ListItemButton>
			</ListItem>
		</Box>
	);
});

export default PathItem;

