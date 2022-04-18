import { AppBar, Container, CssBaseline, Stack, Toolbar, Typography } from '@mui/material';

import img from './assets/logo.png';

function App() {
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
						<Typography variant="h3">Country</Typography>
						<Typography variant="h3">Summary</Typography>
						<Typography variant="h3">Revenue per month</Typography>
					</Stack>
				</Container>
			</main>
		</>
	);
}

export default App;
