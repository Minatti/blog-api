// Importa a lib better-sqlite3
const Database = require('better-sqlite3');

// Cria ou abre o banco de dados (arquivo .sqlite na raiz do projeto)
const db = new Database('blog.db', { verbose: console.log });


const criarTabela = `
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    conteudo TEXT NOT NULL,
    autor TEXT NOT NULL,
    data_cr TEXT NULL,
    data_at TEXT NULL
  )
`;


db.prepare(criarTabela).run();
console.log('✅ Tabela "posts" criada/verificada com sucesso');

// Exporta a instância para ser reutilizada nos Models
module.exports = db;
