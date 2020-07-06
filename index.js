const express = require('express');

const port = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

app.listen(port);