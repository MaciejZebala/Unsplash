const path = require('path');
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
const buildPath = path.join(__dirname, '..', 'build');
// const sos = path.join(__dirname, '..', 'build/index.html');
// console.log(sos);
app.use(express.static(buildPath));
// app.use(express.static(path.join(__dirname)));

app.get('/autocomplete/:query', async (req, res) => {
	const { query } = req.params;
	try {
		const result = await axios.get(`https://unsplash.com/nautocomplete/${query}`);
		res.send(result.data.autocomplete);
	} catch (e) {
		res.status(400).send('Error');
	}
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'build/index.html'));
});

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
