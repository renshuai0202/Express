const express = require('express');

const router = express.Router();

router.get('/big', (req, res) => {
  res.send('get big food');
});

router.post('/small', (req, res) => {
  res.send('post small food');
});

module.exports = router;