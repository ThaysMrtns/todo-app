function adiciona() {
    //Gera uma requisição via post com os dados do formulario
    const url = "http://localhost:3000/adiciona";

    let titulo = document.querySelector("#titulo");

    fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        })
        .then((resp) => {
            console.log(resp);
        })
        .catch((err) => { console.log(err); })
}