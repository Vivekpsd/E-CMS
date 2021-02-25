const express = require('express');
const router = express.Router();

//@route  GET api/users
//@Desc   Test Route
//@Access Public
router.get('/', (req, res) => res.send('User Route'));

module.exports = router;
