// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Endpoint que responde à solicitação do botão
app.get('/api/message', (req, res) => {
  res.json({ message: 'Mensagem recebida do servidor!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
