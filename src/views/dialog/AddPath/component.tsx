import { IconButton, Dialog, DialogActions, DialogContent, Typography, useTheme, useMediaQuery, Container, Box, Divider } from '@mui/material'
import { Close } from '@mui/icons-material';
import { observer } from 'mobx-react-lite';

import { DIALOG_IDS } from 'constants/dialog';
import dialogStore from 'store/Dialog';
import FormattedOrRawMessage from 'views/shared/FormattedOrRawMessage';

import Form from './Form';

const AddPath = observer(() => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('lg'));
	const matchesMd = useMediaQuery(theme.breakpoints.up('md'));
	
	return (
		<Dialog
			fullWidth
			maxWidth="lg"
			fullScreen={matches}
			open={dialogStore.openDialogId === DIALOG_IDS['ADD_PATH']}
			onClose={dialogStore.close}
		>
			<DialogActions className="MuiDialogActions__between">
				<Typography variant="h5">
					<FormattedOrRawMessage message={{ id: 'dialog.addPath.title' }} />
				</Typography>
				<IconButton onClick={dialogStore.close}>
					<Close color="primary" />
				</IconButton>
			</DialogActions>
			<DialogContent className="MuiDialogActions__without-padding">
				<Container className="MuiContainer-main MuiContainer-main--dialog">
					<Box className="MuiContainer-main__wrapper">
						<Box className="MuiContainer-main__path">
							<Form medium={matchesMd} />
						</Box>
						<Divider orientation={matches ? 'horizontal' : 'vertical'} />
						<Box className="MuiContainer-main__map">
							right
						</Box>
					</Box>
				</Container>
			</DialogContent>
		</Dialog>
	)
});

export default AddPath;
