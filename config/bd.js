//Importando o sqlite3 para o meu projeto
const sqlite3 = require('sqlite3').verbose();

//Criando uma instância banco de dados
const db = new sqlite3.Database('database.db');

//Executa as instruções em fila, em modo serializado
db.serialize(()=>{
    //Cria uma tabela no meu banco de dados
    db.run(`CREATE TABLE IF NOT EXISTS TAREFAS ( 
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo VARCHAR(64),
        descricao TEXT,
        status VARCHAR(32)
    )`);
    //Adiciona elementos no meu banco de dados
    db.run(`
    INSERT INTO TAREFAS (
        titulo,
        descricao,
        status
        )
    VALUES ('Yoga', 'Fazer yoga segunda e quarta', 'Continuo'),
           ('Médico', 'Consulta com Dr. Ayrton sexta', 'TODO'),
           ('Pagar contas', 'Pagar boletos de água e luz', 'DOING')
    `);

    //Consulta os elementos adicionados no banco de dados
    db.each("SELECT * FROM TAREFAS", (erro, tarefa) => {
        console.log('tarefa: ');
        console.log(tarefa);
    });
});

//Encerra banco de dados
process.on('SIGINT', () => {
    db.close(() => {
        console.log('banco de dados encerrado!');
        process.exit(0);
    });
});

//Torna exportável o banco de dados para outros scripts do projeto
module.exports = db;
