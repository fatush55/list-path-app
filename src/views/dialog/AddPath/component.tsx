import { IconButton, Dialog, DialogActions, DialogContent, Typography, useTheme, useMediaQuery, Container, Box, Divider } from '@mui/material'
import { Close } from '@mui/icons-material';
import { observer } from 'mobx-react-lite';

import { DIALOG_IDS } from 'constants/dialog';
import dialogStore from 'store/Dialog';
import FormattedOrRawMessage from 'views/shared/FormattedOrRawMessage';
import schema from 'lib/yupLocalised/schemas/createPath';
import FormikWrapper from 'views/shared/FormikWrapper';
import pathStore from 'store/Path';
import pathsStore from 'store/Paths';

import Form from './Form';
import MapPath from './MapPath';

import useContainer from './useContainer';

const AddPath = observer(() => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('lg'));
	const matchesMd = useMediaQuery(theme.breakpoints.up('md'));
	const { handlerSubmit, values } = useContainer(pathStore, pathsStore);
	
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
				<FormikWrapper values={values} onSubmit={handlerSubmit} schema={schema}>
					<Container className="MuiContainer-main MuiContainer-main--dialog">
						<Box className="MuiContainer-main__wrapper">
							<Box className="MuiContainer-main__path">
								<Form medium={matchesMd} />
							</Box>
							<Divider orientation={matches ? 'horizontal' : 'vertical'} />
							<Box className="MuiContainer-main__map">
								<MapPath />
							</Box>
						</Box>
					</Container>
				</FormikWrapper>
			</DialogContent>
		</Dialog>
	)
});

export default AddPath;
