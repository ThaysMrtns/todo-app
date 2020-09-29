class ListaTarefas {
    //A classe irá receber um parâmetro chamado _db
    constructor(bd) {
        this._bd = bd;
    }

    //Função lista, que recebe um callback
    lista(callback) {
        //Acessa o banco de dados
        //Realiza uma consulta, lista todas as tarefas       
        this._bd.all('SELECT * FROM TAREFAS', (erro, resultados) => {
            callback(erro, resultados); //A callback recebe os erros e os resultados
        });
    }

    adiciona(titulo, descricao, status) {
        this._bd.run(`INSERT INTO TAREFAS (titulo, descricao, status) VALUES (?, ?, ?)`, [titulo, descricao, status],
            (err) => {
                if (err) {
                    console.log("Erro ao inserir tarefas no banco de dados");
                }
            });
    }

    deleta(id) {
        this._bd.run(`DELETE FROM TAREFAS WHERE id = ?`, [id],
            (err) => {
                if (err) {
                    console.log("Erro ao deletar tarefa no banco de dados");
                }
            });
    }
}

//Torna acessível a outros scripts a classe ListaTarefas
module.exports = ListaTarefas;