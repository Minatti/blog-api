// Controlador para lidar com posts do blog

// Função de exemplo (mock) para listar os posts
function getAllPosts(req, res) {
  // Simulação de dados
  const posts = [
    { id: 1, titulo: 'Primeiro post', conteudo: 'Conteúdo do primeiro post.' },
    { id: 2, titulo: 'Segundo post', conteudo: 'Conteúdo do segundo post.' }
  ];

  res.status(200).json(posts);
}

module.exports = {
  getAllPosts
};
