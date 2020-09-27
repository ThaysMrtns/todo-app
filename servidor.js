const express = require('express'); //Importação da biblioteca express como dependência do meu projeto
const app = express(); //Executando sua função
const port = process.env.PORT || 3000; //Porta // ou porta 3000
const cors = require('cors') //Cors

const rotas = require('../todo-app/src/rotas/rotas-tarefas'); //Importação das tarefas do script rotas-tarefas

//Arquivos estáticos
app.use(cors()) //habilitando cors na aplicação
app.use('/public', express.static('src/public')); //Habilitando arquivos estáticos na aplicação

//Tomada do meu servidor
app.listen(port, function() {
    console.log("servidor funcionando na porta " + port);
});

rotas(app); //Adicinando as rotas e o param app

module.exports = app; //Tornando o app, função do express, exportável para outros scripts