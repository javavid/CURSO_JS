const obtenerPostUsusario = (usuario, callback) => {
console.log(`obtener los post de ${usuario} ...`);
setTimeout(() => {
    let posts = ['post1', 'post2', 'post3'];
    callback(posts);
}, 2000);
}

obtenerPostUsusario('carlos', (post) => {
console.log(post);
});