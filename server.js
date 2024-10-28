const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsing de JSON
app.use(express.json());

// Rota para receber mensagens
app.post('/send-message', (req, res) => {
    const { message } = req.body; // Pega a mensagem do corpo da requisição
    if (!message) {
        return res.status(400).json({ error: 'Mensagem não fornecida' });
    }
    // Retorna a mesma mensagem recebida
    res.json({ message });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
