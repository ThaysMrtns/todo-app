const pagina = require('../views/template'); //Importando template html
const bd = require('../../config/bd'); //Importar banco de dados

const ListaTarefas = require('../infra/lista-tarefas'); //Importar classe ListaTarefas

//Roteamento
//Exportando uma função com o param app para ser utilizada mo servidor
//Pq app não existe nesse script
//E sim no servidor
module.exports = (app) =>{
    app.get('/', function(req, resp){
        bd.all('SELECT * FROM TAREFAS', (erro, resultados) => {
            //Instância da classe ListaTarefas que recebe o banco de dados
            const listaTarefas = new ListaTarefas(bd);

            //Acessando a função da classe chamada lista
            listaTarefas.lista((erro, resultados) => {
                resp.send(pagina(resultados));
            }) 
        }); 
    });
};
