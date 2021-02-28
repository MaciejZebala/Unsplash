const path = require('path');
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.static(path.join(__dirname)));

app.get('/autocomplete/:query', (req, res) => {
	const { query } = req.params;
	return axios
		.get(`https://unsplash.com/nautocomplete/${query}`)
		.then((data) => res.json(data.data.autocomplete))
		.catch((e) => {
			console.log(e);
			res.status(500).send({ error: true });
		});
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname));
});

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
