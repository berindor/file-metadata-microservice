var express = require('express');
var cors = require('cors');
require('dotenv').config();
require('dotenv').config();
let formidable = require('formidable');
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

//app functions start here
app.post('/api/fileanalyse', async (req, res, next) => {
  const form = formidable.formidable({});
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    console.log({ fields, files });
    const size = files.upfile[0].size;
    const type = files.upfile[0].mimetype;
    const name = files.upfile[0].originalFilename;
    res.json({ name, type, size });
  });
});
