const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller.js');

// Rota de teste (GET /post)
// router.get('/', (req, res) => {
//   res.json({ message: 'Rota de postagens funcionando com sucesso! 🚀' });
// });

router.get('/', postController.getAllPosts);

module.exports = router;
