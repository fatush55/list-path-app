import React, { FC } from 'react';
import { Paper, Typography } from '@mui/material';

import UserLayout from 'views/layout/UserLayout';
import FormattedOrRawMessage from 'views/shared/FormattedOrRawMessage';

const NotFound: FC = () => (
		<UserLayout
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Typography variant="h1" color="primary">
				<FormattedOrRawMessage message={{ id: 'notFount.title' }} />
			</Typography>
		</UserLayout>
);

export default NotFound;
