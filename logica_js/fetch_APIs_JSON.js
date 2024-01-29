let urlBase = 'https://jsonplaceholder.typicode.com'


/*GET: pedir informacion
let query = 'posts/1'
fetch(`${urlBase}/${query}`)
      .then(response => response.json())
      .then(json => console.log(json))*/




      

      /*POST: enviar informacion

      let requestBody = {
        title: 'Welcome',
        body: 'sientansen comodos',
        userId: 1,
      }
      /*fetch(`${urlBase}/posts`,{
        method: 'POST',
        headers: {
            'content-type': 'aplication/json; charset=UTF-8',
        },
        body: JSON.stringify(requestBody)
      })*/


      
      
      /*PUT: editar informacion

      let posteo = 5;
      let requestBody2 = {
        title: 'Welcome',
        body: 'sientansen comodos',
        userId: 5,
      }
      fetch(`${urlBase}/posts/${posteo}`,{
        id: 100,
        method: 'PUT',
        headers: {
            'content-type': 'aplication/json; charset=UTF-8',
        },
        body: JSON.stringify(requestBody2)
      })*/

      /*PATCH: editar informacion (solo se edita un atributo)
      let post = 10
      let modificacion = {
        title: 'este titulo ha sido modificado'
      }
      
      fetch(`${urlBase}/posts/${post}`,{
        method: 'PATCH',
        headers: {
            'content-type': 'aplication/json; charset=UTF-8',
        },
        body: JSON.stringify(modificacion)
      })*/

      /*DELETE: borrar un item
      let elementoAEliminar = 7

      fetch(`${urlBase}/posts/${elementoAEliminar}`, {
  method: 'DELETE',
});*/


      /*.then(response => response.json())
      .then(json => console.log(json))
      */