const express = require('express');
const app = express();

app.get('/message', (req, res) => {
	res.send({message: 'Hello enterJS'});
});

app.listen(3001, () => {
	console.log('App listening on port 3001!');
});
