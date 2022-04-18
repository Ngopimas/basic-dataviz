import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Container } from '@mui/material';

import img from '../../assets/logo.png';

function TopBar() {
	return (
		<AppBar position="static" sx={{ backgroundColor: 'background.paper', padding: 1, mb: 8 }}>
			<Toolbar>
				<Container>
					<img width="247" height="35" src={img} alt="In The Memory logo" loading="lazy" />
				</Container>
			</Toolbar>
		</AppBar>
	);
}

export default TopBar;
