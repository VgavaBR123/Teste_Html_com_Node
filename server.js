const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const db = new sqlite3.Database('./database.db');

// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());

// Criar a tabela no banco de dados
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT
  )`);
});

// Endpoint para salvar a mensagem no banco de dados
app.post('/api/messages', (req, res) => {
  const content = req.body.content;

  if (!content) {
    return res.status(400).json({ error: 'Content is required' });
  }

  const stmt = db.prepare('INSERT INTO messages (content) VALUES (?)');
  stmt.run(content, function(err) {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ message: 'Message saved', id: this.lastID });
  });
  stmt.finalize();
});

// Porta de conexão do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
