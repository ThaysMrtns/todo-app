const pagina = require('../views/template'); //Importando template html
const bd = require('../../config/bd'); //Importar banco de dados

const ListaTarefas = require('../infra/lista-tarefas'); //Importar classe ListaTarefas

const BodyParser = require('body-parser'); //Middleware
const cors = require('cors');



//Roteamento
module.exports = (app) => {
    app.use(BodyParser.json()); //Utilizando o Middleware
    app.use(cors()); //Utilizando o cors

    //Método get que gera o template da página html
    app.get('/', (req, resp) => {
        bd.all('SELECT * FROM TAREFAS', (erro, resultados) => {
            //Instância da classe ListaTarefas que recebe o banco de dados
            const listaTarefas = new ListaTarefas(bd);

            //Acessando a função da classe chamada lista
            listaTarefas.lista((erro, resultados) => {
                resp.send(pagina(resultados)); //Trafegar os dados como json
            })
        });
    });

    //Método post 
    app.post('/', (req, resp) => {
        bd.run(`INSERT INTO TAREFAS (titulo, descricao, status) VALUES (?, ?, ?)`, [req.body.titulo, req.body.descricao, req.body.status],
            (err) => {
                if (err) {
                    console.log("Erro ao inserir tarefas no banco de dados");
                }
            });
        resp.send("Post concluido");
    });

    //Método delete passar o id
    app.delete('/:idTarefa', (req, resp) => {
        bd.run(`DELETE FROM TAREFAS WHERE id = ?`, [req.params.idTarefa]);
        resp.send("Delete concluido");
    });
};