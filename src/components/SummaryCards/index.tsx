import { Box, Stack, Grid, Typography } from '@mui/material';
import SummaryCard from '../SummaryCard';
import { ISummaryCard } from '../../interfaces/summaryCard';

function SummaryCards({ data = [] }: { data: Pick<ISummaryCard, 'title' | 'value'>[] }) {
	const brandColors = ['#D34718', '#519A91', '#F5B714'];
	const colorsCount = brandColors.length;

	return (
		<Box sx={{ marginLeft: -20 }}>
			<Grid container spacing={2}>
				{data.map((item, i) => {
					return (
						<Grid key={i} item xs={12} md={4}>
							<SummaryCard title={item?.title} value={item?.value} color={brandColors[i % colorsCount]} />
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
}

export default SummaryCards;