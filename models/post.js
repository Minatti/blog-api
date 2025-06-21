const db = require('../config/configDB');

//Persistência dos dados

const criarPost = (titulo, conteudo, autor) => {
    const now = new Date().toISOString();
    const stmt = db.prepare(`
    INSERT INTO posts (titulo, conteudo, autor, data_criacao)
    VALUES (?, ?, ?, ?)
  `);

  const info = stmt.run(titulo, conteudo, autor, now);
  return info.lastInsertRowid;
}

const listarPosts = () => {
  const stmt = db.prepare('SELECT *  FROM posts ORDER BY data_criacao DESC');
  return stmt.all();
};

// Exportar função para uso no controller
module.exports = {
  criarPost
  ,listarPosts
};
