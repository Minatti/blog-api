const express = require('express');
const app = express();
const postRoutes = require('./routes/post');
const db = require('./config/configDB');

const PORT = 3000;

app.use(express.json());

// Testando select no db
try {
  const posts = db.prepare('SELECT * FROM posts').all();
  console.log('✅ Dados atuais na tabela "posts":', posts);
} catch (error) {
  console.error('❌ Erro ao conectar no banco de dados:', error.message);
}

app.get('/', (req, res) => {
    res.send('Hello my friend! API Rodando...')
});

app.use('/post', postRoutes);


app.listen(PORT, () => {
   console.log(`Servidor rodando local em: http://localhost:${PORT}`); 
});