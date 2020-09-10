const pagina = require('../views/template'); //Importando template html

//Importar banco de dados
const bd = require('../../config/bd');

//Roteamento
//Exportando uma função com o param app para ser utilizada mo servidor
//Pq app não existe nesse script
//E sim no servidor
module.exports = (app) =>{
    app.get('/', function(req, resp){
        bd.all('SELECT * FROM TAREFAS', (erro, resultados) => {
            resp.send(pagina(resultados)); 
        });
        
    });
};
