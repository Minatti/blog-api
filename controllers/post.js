const { criarPost } = require('../models/post.js');

// CRUD

// Create
const criarNovoPost = (req, res) => {
    const { titulo, conteudo, autor } = req.body;

    if (!titulo || !conteudo || !autor) {
        return res.status(400).json({ error: 'Preencha todos os campos obrigatórios.' });
    }

    try {
        const id = criarPost(titulo, conteudo, autor);
        res.status(201).json({ message: 'Post criado com sucesso!', id });
    } catch (error) {
        console.error('Erro ao criar post:', error.message);
        res.status(500).json({ error: 'Erro interno ao criar post.' });
    }
}

module.exports = {
  criarNovoPost
};
