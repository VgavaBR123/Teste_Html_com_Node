const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Servir arquivos estáticos (HTML, CSS, JS) da pasta 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Endpoint para enviar dados para a página HTML
app.get('/api/dados', (req, res) => {
    const dados = { valor: Math.random().toFixed(2) * 100 }; // Valor aleatório para teste
    res.json(dados);
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
