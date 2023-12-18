const obtenerPost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ['post1','post2','post3'];
            const error = true;
            if(error){
                reject('hubo un error al intentar obtener los post');
            }else{
                resolve(posts);
            }
        }, 2000);
    });
}

const mostrarPost = async() => {
    try{
        const posts = await obtenerPost();//mientras que await este esperando la informacion ningun codico se ejecutara despues de este.
    console.log(posts);
    }catch(error){
        console.log(error);
    }
    
};

mostrarPost();