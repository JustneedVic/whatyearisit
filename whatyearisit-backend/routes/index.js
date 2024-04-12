var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('whatyearisit-six.vercel.app//', function (req, res, next) {
  const date = new Date().getFullYear();
  res.json({ year: date });
});

module.exports = router;
