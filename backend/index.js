const path = require('path');
const express = require('express');

const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

const buildPath = path.join(__dirname, '..', 'build');

app.use(express.static(buildPath));

app.get('/autocomplete/:query', async (req, res) => {
	const { query } = req.params;
	try {
		const result = await axios.get(`https://unsplash.com/nautocomplete/${query}`);
		res.send(result.data.autocomplete);
	} catch (e) {
		res.status(400).send('Error');
	}
});

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
