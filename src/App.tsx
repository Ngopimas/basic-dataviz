import { useState } from 'react';
import { AppBar, Autocomplete, Box, Container, CssBaseline, Stack, TextField, Toolbar, Typography } from '@mui/material';

import img from './assets/logo.png';
import BarChart from './components/BarChart';
import SummaryCards from './components/SummaryCards';

const countries = ['All', 'France', 'United Kingdom'];

const cardsData = [
	{
		title: 'Total revenue',
		value: '1000'
	},
	{
		title: 'Average revenue per order',
		value: '1000'
	},
	{
		title: 'Number of unique customers',
		value: '1000'
	}
];

const chartData = {
	series: [3000, 4000, 4500, 5000, 4900, 6000, 7000, 9100, 0, 4900, 5500, 2000, 8100],
	categories: ['Dec. 10', 'Jan. 11', 'Feb. 11', 'Mar. 11', 'Apr. 11', 'May. 11', 'Jun. 11', 'Jul. 11', 'Aug. 11', 'Sep. 11', 'Oct. 11', 'Nov. 11', 'Dec. 11']
};

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
						<Stack spacing={4}>
							<Typography variant="h3">Summary</Typography>
							<SummaryCards data={cardsData} />
						</Stack>
						<Typography variant="h3">Revenue per month</Typography>
						<BarChart data={chartData} />
					</Stack>
				</Container>
			</main>
		</>
	);
}

export default App;
