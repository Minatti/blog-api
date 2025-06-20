const express = require('express');
const app = express();
const PORT = 3000;
const postRoutes = require('./routes/post.routes');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello my friend! API Rodando...')
});

app.use('/post', postRoutes);


app.listen(PORT, () => {
   console.log(`Servidor rodando local em: http://localhost:${PORT}`); 
});