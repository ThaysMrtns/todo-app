class ListaTarefas {
    //A classe irá receber um parâmetro chamado _db
    constructor(bd){
        this._bd = bd; 
    }

    //Função lista, que recebe um callback
    lista(callback){
        //Acessa o banco de dados
        //Realiza uma consulta, lista todas as tarefas       
        this._bd.all('SELECT * FROM TAREFAS', (erro, resultados) => { 
            callback(erro, resultados); //A callback recebe os erros e os resultados
        });
    }
}

//Torna acessível a outros scripts a classe ListaTarefas
module.exports = ListaTarefas;