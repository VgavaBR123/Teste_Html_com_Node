const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Configurar banco de dados SQLite
const db = new sqlite3.Database('database.sqlite', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Conectado ao banco de dados SQLite.');
});

// Criar tabela se não existir
db.run(`CREATE TABLE IF NOT EXISTS dados (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    valor TEXT
)`);

// Rota para receber dados
app.post('/api/data', (req, res) => {
    const { valor } = req.body;
    db.run(`INSERT INTO dados (valor) VALUES (?)`, [valor], function(err) {
        if (err) {
            return console.log(err.message);
        }
        res.json({ id: this.lastID });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});
