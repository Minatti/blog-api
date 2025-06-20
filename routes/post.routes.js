const express = require('express');
const router = express.Router();

// Rota de teste (GET /post)
router.get('/', (req, res) => {
  res.json({ message: 'Rota de postagens funcionando com sucesso! 🚀' });
});

module.exports = router;
