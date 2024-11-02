// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;


// Configura o Express para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API exemplo para envio de dados do cliente ao servidor
app.post('/api/data', express.json(), (req, res) => {
  const data = req.body;
  console.log('Dados recebidos:', data);
  res.json({ message: 'Dados recebidos com sucesso!' });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
