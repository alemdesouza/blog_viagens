
// Esperar ao html ser carregado
$(document).ready(function() {

  $('#publicar-post').on('click', function() {

      // Peguei os valores que o usuario escreveu
      var autorPost = $('#autor-post').val();
      var tituloPost = $('#titulo-post').val();
      var urlImagem = $('#imagem-post').val();
      var conteudoPost = $('#conteudo-post').val();

      var novopost = {
          "destino": tituloPost,
          "imagem": urlImagem,
          "autor": autorPost,
          "data": new Date().toDateString(),
          "conteudo": conteudoPost,
          "curtidas": 0,
          "comentarios": []
      };

      // Pegar blog do localStorage
      var blog = JSON.parse(localStorage.getItem('blog'));

      // Unshift coloca o elemento na primeira posição do array
      blog.postagens.unshift(novopost);

      // Salvar novo post no local storage
      localStorage.setItem('blog', JSON.stringify(blog));

      location.href = './index.html';

  });

});