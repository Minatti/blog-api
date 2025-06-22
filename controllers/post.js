const { criarPost, listarPosts, atualizarPost, deletarPost } = require('../models/post.js');


// Criar
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
// Listar
const listarTodosPosts = (req, res) => {
  try {
    const posts = listarPosts();
    res.status(200).json(posts);
  } catch (error) {
    console.error('Erro ao listar posts:', error.message);
    res.status(500).json({ error: 'Erro ao recuperar posts.' });
  }
};


// Atualizar
const editarPost = (req, res) => {
  const { id } = req.params;
  const { titulo, conteudo, autor } = req.body;

    if (!titulo || !conteudo || !autor) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  try {
    const linhasAfetadas = atualizarPost(id, titulo, conteudo, autor);

    linhasAfetadas
      ? res.json({ message: 'Post atualizado com sucesso.' })
      : res.status(404).json({ error: 'Post não encontrado.' });

  } catch (error) {
    console.error('Erro ao atualizar post:', error.message);
    res.status(500).json({ error: 'Erro interno ao atualizar post.' });
  }
};

// Deletar
const excluirPost = (req, res) => {
    const { id } = req.params;
    const changes = deletarPost(id);

    return changes > 0
    ? res.status(200).json({ message: `Post ID ${id} excluido com sucesso.`})
    : res.status(404).json({ error: 'Post não encontrado.'});
};


module.exports = {
  criarNovoPost
  ,listarTodosPosts
  ,editarPost
  ,excluirPost
};
