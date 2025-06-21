const express = require('express');
const router = express.Router();
const post = require('../controllers/post');

router.post('/', post.criarNovoPost);

module.exports = router;
