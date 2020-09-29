const pagina = require('../views/template'); //Importando template html
const bd = require('../../config/bd'); //Importar banco de dados

const ListaTarefas = require('../infra/tarefasDAO'); //Importar classe ListaTarefas

const bodyParser = require('body-parser'); //Middleware
const cors = require('cors');

//Roteamento
module.exports = (app) => {
    app.use(bodyParser.json()); //Utilizando o Middleware
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cors()); //Utilizando o cors

    const listaTarefas = new ListaTarefas(bd);

    //Método get que gera o template da página html
    app.get('/', (req, resp) => {
        //Instância da classe ListaTarefas que recebe o banco de dados
        //Acessando a função da classe chamada lista
        listaTarefas.lista((erro, resultados) => {
            resp.send(pagina(resultados)); //Trafegar os dados como json
        })
    });

    //Método post 
    app.post('/adiciona', (req, resp) => {
        resp.send(listaTarefas.adiciona(req.body.titulo, req.body.descricao, req.body.status));
    });

    //Método delete passar o id
    app.delete('/:idTarefa', (req, resp) => {
        // bd.run(`DELETE FROM TAREFAS WHERE id = ?`, [req.params.idTarefa]);
        resp.send(listaTarefas.deleta(req.params.idTarefa));
    });
};