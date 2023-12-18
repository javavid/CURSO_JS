const obtenerPost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ['post1','post2','post3'];
            const error = false;
            if(error){
                reject('hubo un error al intentar obtener los post');
            }else{
                resolve(posts);
            }
        }, 2000);
    });
}

obtenerPost().then((posts) => {
    console.log(posts);
}).catch((error) => {
console.log(error);
});