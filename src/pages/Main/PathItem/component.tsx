import React, { FC } from 'react';
import {
	Box,
	Avatar,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	Typography,
} from '@mui/material';
import { ListChildComponentProps } from 'react-window';
import { ChevronRightOutlined, Directions } from '@mui/icons-material';

import ListItemText from 'views/shared/ListItemText';
import FormattedOrRawMessage from 'views/shared/FormattedOrRawMessage';

const PathItem: FC<ListChildComponentProps> = (props) => {
	const { index, style } = props;
	
	return (
		<Box style={style} key={index}>
			<ListItem disablePadding>
				<ListItemButton>
					<ListItemAvatar>
						<Avatar>
							<Directions color="warning" />
						</Avatar>
					</ListItemAvatar>
					<ListItemText
						primary="Single-line item"
						secondary="Secondary text"
					/>
					<Box className="MuiListPath__item__path-length">
						<Typography variant="body2">
							<FormattedOrRawMessage message={{ id: 'shared.km', values: { val: '10' } }} />
						</Typography>
						<ChevronRightOutlined/>
					</Box>
				</ListItemButton>
			</ListItem>
		</Box>
	);
}

export default PathItem;

