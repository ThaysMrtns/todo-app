const express = require('express'); //Importação da biblioteca express como dependência do meu projeto
const app = express(); //Executando sua função
const port = 3000; //Porta

const rotas = require('../node/src/rotas/rotas-tarefas'); //Importação das tarefas do script rotas-tarefas


//Tomada do meu servidor
app.listen(port, function(){
    console.log("servidor funcionando na porta " + port);
});

rotas(app); //Adicinando as rotas e o param app

//module.exports = app; //Tornando o app, função do express, exportável para outros scripts