const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir os arquivos estáticos
app.use(express.static('public'));

// Rota para /api/dados
app.get('/api/dados', (req, res) => {
  res.json({ mensagem: 'Dados enviados do backend!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
