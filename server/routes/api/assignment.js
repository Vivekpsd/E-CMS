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

//router.get('/', (req, res) => {});
//Upload file by teacher

router.post('/teacher/:courseID/:id', (req, res) => {
  console.log(req.params.courseID);

  console.log(req.params.id);
  if (req.files) {
    var file = req.files.file;
    var id = req.params.id;
    file.name = id;
    var filename = file.name;
    var courseID = req.params.courseID;

    var paths = path.join(__dirname + '\\..' + '\\..', '/uploads', '/teacher');

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
      '/teacher',
      `/${courseID}`
    );
    file.mv(`${path1}/` + filename, function (err) {
      if (err) {
        res.send(err);
      } else {
        res.send('file uploaded');
      }
    });
  } else {
    console.log('No file');
  }

  // fs.renameSync(
  //   path.join(
  //     __dirname + '\\..' + '\\..',
  //     '/uploads',
  //     '/teacher',
  //     `/${courseID}`,
  //     `/${filename}`
  //   ),
  //   path.join(
  //     __dirname + '\\..' + '\\..',
  //     '/uploads',
  //     '/teacher',
  //     `/${courseID}`,
  //     `/${id}`
  //   )
  // );
});

//See list of course in assigment
router.get('/courselist', async (req, res) => {
  try {
    var directoryPath = path.join(
      __dirname + '\\..' + '\\..',
      '/uploads',
      '/teacher'
    );
    console.log(directoryPath);
    fs.readdir(directoryPath, function (err, files) {
      //handling error
      if (err) {
        return console.log('Unable to scan directory: ' + err);
      }
      //listing all files using forEach
      files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file);
      });
      res.json(files);
    });
  } catch (err) {
    console.error(err.message);
  }
});

//see list of assignment folder

router.get('/course-list/:courseID', async (req, res) => {
  try {
    var courseID = req.params.courseID;
    var directoryPath = path.join(
      __dirname + '\\..' + '\\..',
      '/uploads',
      '/teacher',
      `/${courseID}`
    );
    console.log(directoryPath);
    fs.readdir(directoryPath, function (err, files) {
      //handling error
      if (err) {
        return console.log('Unable to scan directory: ' + err);
      }
      //listing all files using forEach
      files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file);
      });
      res.json(files);
    });
  } catch (err) {
    console.error(err.message);
  }
});
//////////////////////////////////////////Student  Uploads////////////////////////////////////////////////

//Student Uploads in uploads file
router.post('/student/:courseID', (req, res) => {
  console.log(req.params.courseID);
  console.log('running correct');
  if (req.files) {
    var file = req.files.file;
    var filename = file.name;
    var courseID = req.params.courseID;
    var assignID = 'Mern Stack Assignment 1';
    var paths = path.join(__dirname + '\\..' + '\\..', '/uploads', '/student');

    fs.mkdir(
      path.join(paths, `${courseID}`, `${assignID}`),
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
      '/student',
      `/${courseID}`,
      `/${assignID}`
    );
    console.log(path1);

    file.mv(`${path1}/` + filename, function (err) {
      if (err) {
        res.send(err);
      } else {
        res.send('file uploaded');
      }
    });
  } else {
    console.log('No file');
  }
});

//See list of assignment uploded
router.get('/assignmentuploded', async (req, res) => {
  console.log('ddddd');
  try {
    var courseID = req.body.courseID;
    var assignID = req.body.assignID;

    var directoryPath = path.join(
      __dirname + '\\..' + '\\..',
      '/uploads',
      '/student',
      `/${courseID}`,
      `/${assignID}`
    );
    console.log('ddddd', directoryPath);
    fs.readdir(directoryPath, function (err, files) {
      //handling error
      if (err) {
        return console.log('Unable to scan directory: ' + err);
      }
      //listing all files using forEach
      files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file);
      });
      res.json(files);
    });
  } catch (err) {
    console.error(err.message);
  }
});
module.exports = router;
