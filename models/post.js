const db = require('../config/configDB');

const criarPost = () => {
    const now = new Date().toISOString();
    const stmt = db.prepare(`
    INSERT INTO posts (titulo, conteudo, autor, data_criacao)
    VALUES (?, ?, ?, ?)
  `);

  const info = stmt.run(titulo, conteudo, autor, now);
  return info.lastInsertRowid;
}

// Exportar função para uso no controller
module.exports = {
  criarPost
};
