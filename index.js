const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

//App setup
//logging
app.use(morgan('combined'));
//parse incoming requests
app.use(bodyParser.json({type: '*/*'}));

//

//Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
