const { Pool } = require('pg');

const pool = new Pool({
	user: 'hamsiny',
	host: 'chatdemodatabase.postgres.database.azure.com',
	database: 'postgres',
	password: 'Hjppvurtne1',
	port: 5432,
	ssl: true
});

pool.query('SELECT * FROM test_table', (err, res) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log('test');
	console.log(res.rows);
});
