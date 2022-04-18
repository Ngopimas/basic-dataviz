import { Typography, Card, CardContent, CardHeader } from '@mui/material';
import { ISummaryCard } from '../../interfaces/summaryCard';

const SummaryCard = ({ title = '', value = '', color = '' }: ISummaryCard) => {
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
			<CardContent>
				<Typography variant="h4">{value}</Typography>
			</CardContent>
		</Card>
	);
};

export default SummaryCard;
