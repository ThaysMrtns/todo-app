 function deleta(event) {
     //Evento que pega o seu alvo, acessa o pai dele, e em seguida acessa seu dataset que é o meu id
     let idTarefa = event.target.parentNode.dataset.id;
     let cardBody = event.target.parentNode;
     const url = "http://localhost:3000/";

     //Fazer uma requisição ao banckend para excluir o card
     fetch(url + idTarefa, {
             method: 'DELETE',
             headers: {
                 'Content-type': 'application/json; charset=UTF-8'
             }
         })
         .then((resp) => {
             console.log(resp);
             cardBody.parentNode.removeChild(cardBody);
         })
         .catch((err) => { console.log(err); })
 }