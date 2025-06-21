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
  const stmt = db.prepare(`
    SELECT * FROM posts 
    ORDER BY data_criacao DESC
    LIMIT 5`
  );
  return stmt.all();
};

const deletarPost = (id) => {
  const stmt = db.prepare(`DELETE FROM posts WHERE id = ?`);
  const info = stmt.run(id);
  return info.changes; // retorna 1 se deletou, 0 se não encontrou
};

// Exportar função para uso no controller
module.exports = {
  criarPost
  ,listarPosts
  //atualizarPost
  ,deletarPost
};
