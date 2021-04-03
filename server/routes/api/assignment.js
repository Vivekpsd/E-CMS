const express = require('express');
const router = express.Router();
const upload = require('express-fileupload');
const auth = require('../../middleware/auth');
const path = require('path');
const fs = require('fs');
router.use(upload());

router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Auth-Token, Content-Type,Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

router.get('/', (req, res) => {});

router.post('/', (req, res) => {
  if (req.files) {
    var file = req.files.file;
    var filename = file.name;
    var courseID = '6064a153e0cd122cc8d2df88';
    var paths = path.join(__dirname + '\\..' + '\\..', '/uploads');

    fs.mkdir(
      path.join(paths, `${courseID}`),
      { recursive: true },
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('New directory successfully created.');
        }
      }
    );
    var path1 = path.join(
      __dirname + '\\..' + '\\..',
      '/uploads',
      `/${courseID}`
    );
    file.mv(`${path1}/` + filename, function (err) {
      if (err) {
        res.send(err);
      } else {
        res.send('file uploaded');
      }
    });
  }
});

module.exports = router;
