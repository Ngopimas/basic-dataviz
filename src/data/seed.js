const fs = require('fs');
const dataforge = require('data-forge');
require('data-forge-fs');

const path = './src/data/';

const df = new dataforge.readFileSync(`${path}data.csv`).parseCSV();

const column = 'country';

const countries = df
	.distinct((row) => row[column])
	.getSeries(column)
	.toArray()
	.sort();

fs.writeFile(`${path}countries.json`, JSON.stringify(['All', ...countries]), (err) => {
	if (err) throw err;
	console.log('Fichier countries.json créé !');
});

const getTotalRevenue = (dataset) => {
	return dataset.getSeries('total_price').sum();
};

const getMonthlyRevenue = (dataset) => {
	return dataset
		.groupBy((row) => row.period)
		.select((group) => {
			return {
				period: group.first().period,
				revenue: group.getSeries('total_price').sum()
			};
		})
		.inflate()
		.toArray()
		.reduce((a, v) => ({ ...a, [v.period]: v.revenue }), {});
};

const countDistinctValues = (dataset, column) => {
	return dataset
		.distinct((row) => row[column])
		.getSeries(column)
		.count();
};

const data = df
	.parseDates('date')
	.parseFloats(['quantity', 'unit_price'])
	.generateSeries({
		total_price: (row) => Math.floor(row.quantity * row.unit_price),
		period: (row) =>
			`${row.date.toLocaleString('default', {
				month: 'short'
			})}. ${row.date.getFullYear()}`
	});

const totalRevenue = getTotalRevenue(data);
const series = getMonthlyRevenue(data);
const totalOrders = countDistinctValues(data, 'order_id');
const totalCustomers = countDistinctValues(data, 'customer_id');

const allCountries = {
	country: 'All',
	totalRevenue,
	totalOrders,
	average: Math.floor(totalRevenue / totalOrders),
	totalCustomers,
	series
};

const result = data
	.groupBy((row) => row.country)
	.select((group) => {
		const totalRevenue = getTotalRevenue(group);
		const series = getMonthlyRevenue(group);
		const totalOrders = countDistinctValues(group, 'order_id');
		const totalCustomers = countDistinctValues(group, 'customer_id');

		return {
			country: group.first().country,
			totalRevenue,
			totalOrders,
			average: Math.floor(totalRevenue / totalOrders),
			totalCustomers,
			series
		};
	})
	.inflate()
	.toArray()
	.reduce((a, v) => ({ ...a, [v.country]: v }), {
		All: allCountries
	});

fs.writeFile(`${path}summary.json`, JSON.stringify(result), function (err) {
	if (err) throw err;
	console.log('Fichier summary.json créé !');
});
