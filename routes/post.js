const express = require('express');
const router = express.Router();
const post = require('../controllers/post');

// Método HTTP post para criar um novo post
router.post('/', post.criarNovoPost);

// Método HTTP get para listar os posts
router.get('/', post.listarTodosPosts);

module.exports = router;
