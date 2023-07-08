const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', (req, res) => {

res.send('Hello World! สวัสดีจ้าdddd');

});


app.listen(port, () => {

debug(`Example app listening at http://localhost:${port}`);

});