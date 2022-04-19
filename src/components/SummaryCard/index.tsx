import CountUp from 'react-countup';
import { Typography, Card, CardContent, CardHeader } from '@mui/material';
import { SummaryCardInterface } from '../../interfaces';

const SummaryCard = ({ title = '', value = '', color = '' }: SummaryCardInterface) => {
	return (
		<Card
			sx={{
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				borderBottom: '1rem solid ' + color
			}}
		>
			<CardHeader title={title} sx={{ flexGrow: 1, alignItems: 'baseline' }} />
			<CardContent sx={{ textAlign: 'end' }}>
				<Typography variant="h4">
					<CountUp start={0} end={Number(value)} duration={0.5} separator=" " suffix="€" />
				</Typography>
			</CardContent>
		</Card>
	);
};

export default SummaryCard;
