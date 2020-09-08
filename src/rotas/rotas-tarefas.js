const pagina = require('../views/template'); //Importando template html

//Roteamento
//Exportando uma função com o param app para ser utilizada mo servidor
//Pq app não existe nesse script
//E sim no servidor
module.exports = (app) =>{
    app.get('/', function(req, resp){
        resp.send(pagina);
    });
}
