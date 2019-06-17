$(document).ready(function() {

  function criarComentario(novocomentario) {
    var comentario = `
      <div class="comentario">
        <div class="comentario-cabecalho">
          <img
            src="https://png.pngtree.com/svg/20161021/de74bae88b.png"
            class="imagem-comentario"
          />
          <div>
            <p class="autor-comentario">${novocomentario.nome}</p>
            <p class="data-comentario">${novocomentario.data}</p>
          </div>
        </div>
        <div>
          <p class="conteudo-comentario">${novocomentario.conteudo}</p>
        </div>
      </div>
    `;
    $('.comentarios-pessoas').prepend($(comentario));
  }

  // Pegar ID da URL da página
  var idblog = location.href.split("#")[1];
  var blog = JSON.parse(localStorage.getItem("blog"));
  var post = blog.postagens[idblog];

  $("#imagem-post").attr("src", post.imagem);
  $("#titulo-post").text(post.destino);
  $("#data-post").text(post.data);
  $("#autor-post").text(post.autor);
  $("#conteudo-post").text(post.conteudo);
  $("#curtidas-post").text(post.curtidas);

  for (let i = 0; i < post.comentarios.length; i++) {
    var comentario = post.comentarios[i];
    criarComentario(comentario);
  }

  // Evento que escuta o click no botão para adicionar um novo
  // comentário
  $("#publicar-comentario").on("click", function() {

    // Peguei os valores que o usuário escreveu na tela
    var nome = $("#nome-comentario").val();
    var conteudo = $("#novo-comentario").val();

    // Peguei o json do localstorage. O JSON contém a informação
    // do blog
    blog = JSON.parse(localStorage.getItem("blog"));
    var novocomentario = {
      nome: nome,
      conteudo: conteudo,
      data: new Date().toDateString()
    };

    // Atualize JSON
    blog.postagens[idblog].comentarios.unshift(novocomentario);

    // Atualizei Localstorage com o novo comentário
    localStorage.setItem("blog", JSON.stringify(blog));

    // Criar comentário na tela
    criarComentario(novocomentario);

    // Limpei campos do novo comentário
    $("#nome-comentario").val('');
    $("#novo-comentario").val('');
  });

  // Evento que escuta o click quando clicka no coração
  // para curtir o post
  $('.heart').on('click', function() {

    blog = JSON.parse(localStorage.getItem("blog"));
    var post = blog.postagens[idblog];
    var curtidas = parseInt(post.curtidas);

    // Atualizei o número na tela
    $('#curtidas-post').text(curtidas + 1);

    // Atualizei o número no JSON
    blog.postagens[idblog].curtidas = curtidas + 1;

    // Salvar novo json no localstorage
    localStorage.setItem("blog", JSON.stringify(blog));

  });

});
