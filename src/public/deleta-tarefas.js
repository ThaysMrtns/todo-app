 function deleta(event) {
     //Evento que pega o seu alvo, acessa o pai dele, e em seguida acessa seu dataset que é o meu id
     let idTarefa = event.target.parentNode.dataset.id;
     let cardBody = event.target.parentNode;
     console.log(idTarefa);
     console.log(cardBody);

     let myHeaders = new Headers();
     let verbo = {
         method: 'DELETE',
         headers: myHeaders,
         mode: 'cors',
         cache: 'default'
     };


     fetch('/:${idTarefa}', verbo)
         .then((response) => {
             if (response.ok) {
                 console.log("response is ok");
                 return response;
             } else {
                 console.log("response isn´t ok")
             }
         })
         .catch((error) => {
             console.log(error);
         })

 }