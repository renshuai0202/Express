const express = require('express');

const router = express.Router();

router.get('/water/blue', (req, res) => {
  res.send('get blue water');
});

router.post('/water/green', (req, res) => {
  res.send('post green water');
});

module.exports = router;