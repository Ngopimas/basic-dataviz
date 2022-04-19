import { useState, useMemo, useEffect } from 'react';
import _ from 'lodash';
import { Autocomplete, Box, Container, CssBaseline, Stack, TextField, Typography } from '@mui/material';

import BarChart from './components/BarChart';
import SummaryCards from './components/SummaryCards';
import TopBar from './components/TopBar';
import countries from './data/countries.json';
import summary from './data/summary.json';

const categories = [
	'Dec. 2010',
	'Jan. 2011',
	'Feb. 2011',
	'Mar. 2011',
	'Apr. 2011',
	'May. 2011',
	'Jun. 2011',
	'Jul. 2011',
	'Aug. 2011',
	'Sep. 2011',
	'Oct. 2011',
	'Nov. 2011',
	'Dec. 2011'
];

function App() {
	const initialChartData = {
		series: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		categories
	};

	const [country, setCountry] = useState('All');
	const [inputValue, setInputValue] = useState('');
	const [chartData, setChartData] = useState(initialChartData);

	const cardsData = useMemo(() => {
		return [
			{
				title: 'Total revenue',
				value: _.get(summary, [country, 'totalRevenue'], 0)
			},
			{
				title: 'Average revenue per order',
				value: _.get(summary, [country, 'average'], 0)
			},
			{
				title: 'Number of unique customers',
				value: _.get(summary, [country, 'totalCustomers'], 0)
			}
		];
	}, [country, summary]);

	useEffect(() => {
		setChartData(initialChartData);
		const monthlyRevenue = _.get(summary, [country, 'series']);
		const countrySeries = _.map(categories, (month) => Number(_.get(monthlyRevenue, month, 0)));
		setChartData({ series: countrySeries, categories });
	}, [country, summary, categories]);

	return (
		<>
			<CssBaseline />
			<TopBar />
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
