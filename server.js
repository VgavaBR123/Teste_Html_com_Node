const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configuração do middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Configuração do banco de dados
const db = mysql.createConnection({
    host: 'localhost', // ou seu host do MySQL
    user: 'root', // seu usuário do MySQL
    password: '', // sua senha do MySQL
    database: 'meu_banco' // seu banco de dados
});

// Conectar ao banco de dados
db.connect(err => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL!');
});

// Rota para salvar dados
app.post('/api/data', (req, res) => {
    const { valor } = req.body;

    const sql = 'INSERT INTO testes (valor) VALUES (?)';
    db.query(sql, [valor], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro ao salvar os dados.' });
        }
        res.json({ id: result.insertId, valor });
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
