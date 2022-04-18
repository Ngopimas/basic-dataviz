import ApexChart from 'react-apexcharts';

function BarChart({ data }: { data: { series: number[]; categories: string[] } }) {
	return (
		<ApexChart
			type="bar"
			series={[
				{
					name: 'Revenue',
					data: data?.series || []
				}
			]}
			options={{
				chart: {
					id: 'montly-revenue'
				},
				dataLabels: {
					enabled: false
				},
				yaxis: {
					title: {
						text: 'Revenue (€)'
					},
					labels: {
						formatter: function (y) {
							return y.toFixed(0) + '€';
						}
					}
				},
				xaxis: {
					categories: data?.categories || []
				}
			}}
		/>
	);
}

export default BarChart;
