import React, { FC } from 'react';
import { InputAdornment, Box, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { Check, MapTwoTone } from '@mui/icons-material';
import { observer } from 'mobx-react-lite';

import InputField from 'views/shared/InputField';
import FormikWrapper from 'views/shared/FormikWrapper';
import FormattedOrRawMessage from 'views/shared/FormattedOrRawMessage';
import schema from 'lib/yupLocalised/schemas/createPath';
import pathStore from 'store/Path';
import pathsStore from 'store/Paths';


import useContainer from './useContainer';

type Props = {
	medium: boolean;
}

const Form: FC<Props> = observer(({ medium }) => {
	const { handlerSubmit } = useContainer(pathStore, pathsStore);
	
	const values = {
		title: '',
		shortDescription: '',
		fullDescription: '',
	};
	
	return (
		<FormikWrapper values={values} onSubmit={handlerSubmit} schema={schema}>
			<Box className="MuiContainer-path-dialog">
				<InputField
					fullWidth
					className="MuiInput__space"
					id="create-path-title"
					name="title"
					variant="outlined"
					label={{ id: 'dialog.addPath.form.title.lable' }}
					size={medium ? 'medium' : 'small'}
					disabled={pathStore.loading}
				/>
				<InputField
					fullWidth
					className="MuiInput__space MuiInput__min-height"
					id="create-path-shortDescription"
					name="shortDescription"
					variant="outlined"
					label={{ id: 'dialog.addPath.form.shortDescription.lable' }}
					multiline
					maxRows={3}
					size={medium ? 'medium' : 'small'}
					disabled={pathStore.loading}
				/>
				<InputField
					fullWidth
					className="MuiInput__min-height"
					id="create-path-fullDescription"
					name="fullDescription"
					variant="outlined"
					label={{ id: 'dialog.addPath.form.fullDescription.lable' }}
					multiline
					maxRows={3}
					size={medium ? 'medium' : 'small'}
					disabled={pathStore.loading}
				/>
				<Box className="MuiContainer-path-dialog__lenght">
					<MapTwoTone
						color="primary"
						fontSize="large"
						sx={{ mr: '10px' }}
					/>
					<Typography>
						<FormattedOrRawMessage
							message={{ id: 'shared.lenght.km', values: { val: 10 } }}
						/>
					</Typography>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<LoadingButton
						loading={pathStore.loading}
						loadingPosition="start"
						type="submit"
						variant="outlined"
						sx={{ mt: '50px', mb: '20px' }}
						startIcon={<Check />}
					>
						<FormattedOrRawMessage message={{ id: 'dialog.addPath.form.subBtn' }} />
					</LoadingButton>
				</Box>
			</Box>
		</FormikWrapper>
	);
});

export default Form;
