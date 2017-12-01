const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router')

//App setup
app.use(morgan('combine'));
app.use(bodyParser.json({type: '*/*'}));
router(app);

//Sever setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server litsening on ', port);
