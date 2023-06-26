const app = require('express')();

const data = [
	{ name: 'Argentina', titles: 3 },
	{ name: 'Uruguay', titles: 2 },
	{ name: 'Brazil', titles: 5 },
	{ name: 'Germany', titles: 4 },
	{ name: 'Italy', titles: 4 },
	{ name: 'England', titles: 1 },
	{ name: 'Spain', titles: 1 },
];

app.get('/', (req, res) => res.json({ message: 'Docker is easy 🐳' }));

app.get('/champions', (req, res) => res.json(data));

const port = process.env.PORT || 8080;

app.listen(port, () =>
	console.log(`app listening on http://localhost:${port}`)
);
