const express = require('express');
const router = express.Router();
const post = require('../controllers/post');

// Método HTTP POST para criar um novo post
router.post('/', post.criarNovoPost);

// Método HTTP GET para listar os posts
router.get('/', post.listarTodosPosts);

// Método HTTP PUT para editar o post por ID
router.put('/:id', post.editarPost);

// Método HTTP DELETE para excluir o post por ID
router.delete('/:id', post.excluirPost);

module.exports = router;
