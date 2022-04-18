const fs = require('fs');
const dataforge = require('data-forge');
require('data-forge-fs');

const df = new dataforge.readFileSync('./src/assets/data.csv').parseCSV();

const column = 'country';

const countries = df
	.distinct((row) => row[column])
	.getSeries(column)
	.toArray()
	.sort();

fs.writeFile('./src/data/countries.json', JSON.stringify(['All', ...countries]), (err) => {
	if (err) throw err;
	console.log('Fichier JSON créé !');
});
