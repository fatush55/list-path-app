import React, { FC } from 'react';
import classnames from 'classnames';
import { Box, Typography, Paper, SxProps, Theme } from '@mui/material';

type Props = {
	/**
	 * The system prop that allows defining system overrides as well as additional CSS styles.
	 */
	sx?: SxProps<Theme>;
	className?: string;
}

const UserLayout: FC<Props> = ({ children, className, ...props }) => (
	<Paper
		{...props}
		className={classnames('MuiLayout-user', {
			[className || '']: Boolean(className), 
		})}
		square
		elevation={3}
	>
		{children}
	</Paper>
);

export default UserLayout;
