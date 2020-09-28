function adiciona() {
    //Gera uma requisição via post com os dados do formulario
    console.log("post! evento disparado");
    let titulo = document.querySelector("#tituloTarefa");
    let descricao = document.querySelector("#descricaoTarefa");
    let status = document.querySelector("#statusTarefa");
    console.log(titulo.value);
    console.log(descricao.value);
    console.log(status.value);

}