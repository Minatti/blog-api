const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello my friend! API Rodando...')
});

app.listen(PORT, () => {
   console.log(`Servidor rodando local em: http://localhost:${PORT}`); 
});