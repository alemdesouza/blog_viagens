var blog = {
    "postagens": [{
        "destino": "Singapura",
        "data": "Sat Jun 08 2019",
        "autor": "Alessandra Lima",
        "conteudo": `
        Oficialmente República de Singapura, é uma cidade-Estado localizada no Sudeste Asiático.
        Constituído por 63 ilhas, Singapura é o que apresenta o maior Índice de Desenvolvimento
        Humano (IDH) dos países asiáticos (9° melhor do mundo em 2014) e sua extensão é menor
        que a cidade de São Paulo.
        Planejado e estruturado para um sucesso econômico, Singapura se ergueu da extrema
        pobreza a riqueza sem limites em poucas décadas. Conhecido como o quarto centro
        financeiro do mundo, e uma potência tecnológica e industrial, está no topo da lista dos
        portos mais movimentados e lucrativos do planeta.
        Com um pouco mais de 50 anos, Singapura é um dos destinos mais recomendados para
        quem se interessa por tecnologia e modernidade. Vamos apresentar a seguir pontos
        turísticos, curiosidades e dicas de viagem para os aventureiros de plantão.
        - Singapura possui quatro línguas oficiais: Inglês, Mandarim, Malaio e Tâmil.
        - O clima é Equatorial, quente o ano inteiro e úmido.
        - É o país da Ásia menos corrupto.
        - Possuiu o 6o melhor Sistema de Saúde do mundo e a 4o maior Expectativa de Vida
        mundial.
        `,
        "imagem": "https://abrilexame.files.wordpress.com/2017/10/singapura.jpg",
        "curtidas": 0,
        "comentarios": []
    }, {
        "destino": "Chinatown",
        "data": "Sat Jun 08 2019",
        "autor": "Alessandra Lima",
        "conteudo": `
        O bairro é um atrativo importante, pois representa uma parte da história de Singapura,
        além de apresentar uma união de culturas, organização urbana e beleza arquitetônica.
        Também abriga importantes templos que ainda serão citados.
        Após conhecer os templos, a sugestão é conhecer os bares, restaurantes e mercados locais.
        emplo budista localizado em Chinatown também funciona como um Museu. Composto de
        cinco andares, apresenta um rico acervo sobre a cultura budista, áreas para meditação e
        belíssimas decorações.
        Local perfeito para as pessoas que apreciam paz e tranquilidade em meio a correria da
        rotina urbana agitada.
        Localizado também em Chinatown é o templo hindu mais antigo de Singapura. A fachada é
        decorada com peças multicores de deuses e figuras mitológicas.
        `,
        "imagem": "https://www.airfrance.co.uk/GB/common/common/img/tbaf/news/SFO/chinatown-la-plus-grande-ville-chinoise-d-amerique/SFO-chinatown-la-plus-grande-ville-chinoise-d-amerique-2_1-1024x512.jpg",
        "curtidas": 0,
        "comentarios": []
    }, {
        "destino": "Buddha Tooth Relic",
        "data": "Sat Jun 08 2019",
        "autor": "Alessandra Lima",
        "conteudo": `
        Templo budista localizado em Chinatown também funciona como um Museu. Composto de
        cinco andares, apresenta um rico acervo sobre a cultura budista, áreas para meditação e
        belíssimas decorações.
        Local perfeito para as pessoas que apreciam paz e tranquilidade em meio a correria da
        rotina urbana agitada.
        `,
        "imagem": "https://previews.123rf.com/images/masterlu/masterlu1311/masterlu131100033/23787096-the-buddha-tooth-relic-temple-in-singapore.jpg",
        "curtidas": 0,
        "comentarios": []
    }, {
        "destino": "Templo Sri Mariamman",
        "data": "Sat Jun 08 2019",
        "autor": "Laura Lourdes",
        "conteudo": `
        Localizado também em Chinatown é o templo hindu mais antigo de Singapura. A fachada é
        decorada com peças multicores de deuses e figuras mitológicas.
        `,
        "imagem": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Sri_Mariamman_Temple_in_Singapore.jpg",
        "curtidas": 0,
        "comentarios": []
    }, {
        "destino": "Singapore Flyer",
        "data": "Sat Jun 08 2019",
        "autor": "Laura Lourdes",
        "conteudo": `
        Uma das mais altas rodas gigantes do planeta, é o principal ponto de observação de
        Singapura. São 175 metros de altura, capacidade para 784 passageiros e 28 pessoas
        transportadas por cápsula.
        `,
        "imagem": "https://cdn1.goibibo.com/t_tg_fs/singapore-singapore-flyer-161624808433-orijgp.jpg",
        "curtidas": 0,
        "comentarios": []
    }]
};

$(document).ready(function() {

    if (localStorage.getItem('blog') == undefined) {
        localStorage.setItem('blog', JSON.stringify(blog));
    }

    var meublog = JSON.parse(localStorage.getItem('blog'));
    var postagens = meublog.postagens;

    for (let i = 0; i < postagens.length; i++) {
        var post = postagens[i];
        var elemento = `
        <div id="${i}" class="blog-post">
          <img
            class="post-imagem"
            src="${post.imagem}"
            alt=""
          />
          <div class="post-corpo">
            <div class="post-cabecalho">
              <img
                src="https://png.pngtree.com/svg/20161021/de74bae88b.png"
                alt=""
              />
              <div>
                <p class="autor-comentario">${post.autor}</p>
                <p class="data-comentario">${post.data}</p>
              </div>
            </div>

            <div class="post-descricao">
              <h4 class="titulo">${post.destino}</h4>
              <p class="post-texto">
                ${post.conteudo}
              </p>
            </div>

            <div class="post-info">
              <p>
                <span id="numero-curtidas">${post.curtidas}</span> curtidas
              </p>
              <img
                class="heart"
                src="https://cdn3.vectorstock.com/i/1000x1000/40/72/red-heart-icon-line-color-love-symbol-isol-vector-21084072.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        `;

        $('#blog-esquerda').append($(elemento));

    }

    // EVENTOS
    $('.blog-post').on('click', function(event) {
        var idpost = $(event.currentTarget).attr('id');
        location.href = './post.html#' + idpost;
    });

});