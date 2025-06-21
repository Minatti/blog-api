const express = require('express');
const router = express.Router();
const post = require('../controllers/post');

// Método HTTP post para criar um novo post
router.post('/', post.criarNovoPost);

// Método HTTP get para listar os posts
router.get('/', post.listarTodosPosts);

// Método HTTP delete para excluir o post por ID
router.delete('/:id', post.excluirPost);

module.exports = router;
