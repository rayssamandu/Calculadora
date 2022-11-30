function Postagem(titulo,mensagem,autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 10,
    this.comentarios = [],
    this.estaAovivo = false
}

let postagem = new Postagem('a','b','c');
console.log(postagem);