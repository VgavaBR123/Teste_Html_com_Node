const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Substitua pelo seu usuário MySQL
    password: '1437965124Xx@', // Substitua pela sua senha MySQL
    database: 'meu_site' // Substitua pelo nome do seu banco de dados
});

// Função de handler que pode ser usada, por exemplo, em uma API
exports.handler = (event, context) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM dados'; // Substitua 'dados' pelo nome da sua tabela
        connection.query(sql, (error, results) => {
            if (error) {
                return reject({
                    statusCode: 500,
                    body: JSON.stringify({ error: 'Erro ao consultar dados' }),
                });
            }
            resolve({
                statusCode: 200,
                body: JSON.stringify(results),
            });
        });
    });
};
