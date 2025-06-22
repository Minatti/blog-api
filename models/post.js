const db = require('../config/configDB');

//Persistência dos dados

const criarPost = (titulo, conteudo, autor) => {
    const now = new Date().toISOString();
    const stmt = db.prepare(`
    INSERT INTO posts (titulo, conteudo, autor, data_cr, data_at)
    VALUES (?, ?, ?, ?, ?)
  `);

  const info = stmt.run(titulo, conteudo, autor, now, now);
  return info.lastInsertRowid;
}

const listarPosts = () => {
  const stmt = db.prepare(`
    SELECT * FROM posts 
    ORDER BY data_cr DESC
    LIMIT 5`
  );
  return stmt.all();
};

const deletarPost = (id) => {
  const stmt = db.prepare(`DELETE FROM posts WHERE id = ?`);
  const info = stmt.run(id);
  return info.changes; // retorna 1 se deletou, 0 se não encontrou
};

const atualizarPost = (id, titulo, conteudo, autor) => {
  const now = new Date().toISOString();

  const stmt = db.prepare(`
    UPDATE posts
    SET titulo = ?, 
        conteudo = ?, 
        autor = ?,
        data_at = ?
    WHERE id = ?
  `);

  const info = stmt.run(titulo, conteudo, autor, now, id);
  return info.changes; // 1 se atualizou, 0 se o ID não existir
};
// Exportar função para uso no controller
module.exports = {
  criarPost
  ,listarPosts
  ,atualizarPost
  ,deletarPost
};
