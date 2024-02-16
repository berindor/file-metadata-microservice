var express = require('express');
var cors = require('cors');
require('dotenv').config();
require('dotenv').config();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

var app = express();

//basic configuration
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

const port = process.env.PORT || 3300;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});

const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);

mongoose.connect(process.env.MONGO_URI);

//app functions start here
