import { useState } from 'react';
import { AppBar, Autocomplete, Box, Container, CssBaseline, Stack, TextField, Toolbar, Typography } from '@mui/material';

import img from './assets/logo.png';

const countries = ['All', 'France', 'United Kingdom'];

function App() {
	const [country, setCountry] = useState<string | undefined>(countries[0]);
	const [inputValue, setInputValue] = useState('');

	return (
		<>
			<CssBaseline />
			<AppBar position="static" sx={{ backgroundColor: 'background.paper', padding: 1, mb: 8 }}>
				<Toolbar>
					<Container>
						<img width="247" height="35" src={img} alt="In The Memory logo" loading="lazy" />
					</Container>
				</Toolbar>
			</AppBar>
			<main>
				<Container>
					<Stack spacing={6}>
						<Box
							sx={{
								display: { xs: 'block', sm: 'flex' }
							}}
						>
							<label htmlFor="country-picker">
								<Typography variant="h3" sx={{ mr: { sm: 8 } }}>
									Country
								</Typography>
							</label>
							<Autocomplete
								value={country || ''}
								onChange={(event, newValue: string) => {
									setCountry(newValue);
								}}
								inputValue={inputValue}
								disableClearable
								onInputChange={(event, newInputValue: string) => {
									setInputValue(newInputValue);
								}}
								options={countries}
								sx={{ width: 300, my: { xs: 4, sm: 0 } }}
								id="country-picker"
								renderInput={(params) => <TextField {...params} />}
							/>
						</Box>
						<Typography variant="h3">Summary</Typography>
						<Typography variant="h3">Revenue per month</Typography>
					</Stack>
				</Container>
			</main>
		</>
	);
}

export default App;
