import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';

import pathsStore from 'store/Paths';
import FormattedOrRawMessage from 'views/shared/FormattedOrRawMessage';

const InfoPath: FC = observer(() => pathsStore.activeId ? (
	<Box className="MuiContainer-main__active-path__info">
		<Box className="MuiContainer-main__active-path__info__header">
			<Typography color="primary" variant="h3">
				<FormattedOrRawMessage
					message={pathsStore.activePath?.title || '' }
				/>
			</Typography>
			<Typography variant="h5">
				<FormattedOrRawMessage
					message={{
						id: 'shared.km',
						values: { val: pathsStore.activePath?.length || 0 },
				}}
				/>
			</Typography>
		</Box>
		<Typography variant="body1" sx={{ mt: '24px', mb: '24px' }}>
			<FormattedOrRawMessage
				message={pathsStore.activePath?.fullDescription || '' }
			/>
		</Typography>
	</Box>
): null);

export default InfoPath;
