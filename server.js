const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public/dist/public'));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const port = 8000;
const server = app.listen(port, () => {
	console.log('server listening on port', port);
});