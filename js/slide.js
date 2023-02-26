const swiper = new Swiper('.swiper', {
  // Optional parameters
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: false,
  rewind: true,
  initialSlide: 1,
  slidesPerView: 1,
  spaceBetween: -800,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 2.5,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

  // Auto Play
  autoplay: {
    delay: 5000,
  },

    // Default parameters
    slidesPerView: 1,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 100,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: -100,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 1,
      },
    }
});

const API_KEY = '35d85489e2e98217e6bb80e10bd639e3';

(async () => {
  let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)"
   }
   
   let response = await fetch(`https://api.themoviedb.org/3/movie/now_playing/?api_key=${API_KEY}&language=pt-BR`, { 
     method: "GET",
     headers: headersList,
   });
   
   let data = await response.json();
   let dataJson = data["results"]
   //console.log(data);
   //console.log(dataJson)

  //  fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=pt-BR`, {
  //   method: "GET",
  //   headers: headersList
  // }).then(response => response.json()).then(generosFilmes => {
  //   //console.log(generosFilmes)
  //   let listaGeneros = generosFilmes.genres
  //   let addGeneros = document.querySelector('.listaGeneros');
  //   listaGeneros.forEach((element) => {
  //     let idGenero = element.id;
  //     let nomeGenero = element.name;
  //     //console.log(idGenero, nomeGenero)
  //     switch (idGenero) {
  //       case 28:
  //           nomeGenero = "Ação";
  //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${idGenero}`, {
  //             method: "GET",
  //             headers: headersList
  //           }).then(response => response.json()).then(generoAcao => {
  //             let responseGeneroAcao = generoAcao.results;
  //             addGeneros.innerHTML = `<h3 class="tituloGeneros">${nomeGenero}</h3>`
  //             responseGeneroAcao.forEach((element) => {
  //               let idFilme = element.id;
  //               let tituloPtBr = element.title;
  //               let sinopsePtBr = element.overview;
  //               let bannerImage = element.backdrop_path;
  //               let posterImage = element.poster_path;
  //               let dataDeLancamento = element.release_date;
  //               let tempoDeConteudo = element.runtime;
  //               addGeneros.innerHTML += `
  //               <swiper-container class="mySwiper slideGeneros" navigation="true" pagination="true" pagination-clickable="true" slides-per-view="4">
  //               <swiper-slide>
  //                 <img class="img-generos" src="https://image.tmdb.org/t/p/original/${posterImage}" title="${tituloPtBr}" alt="${tituloPtBr}">
  //               </swiper-slide>
  //               </swiper-container>
  //             `
  //             })
  //             console.log(responseGeneroAcao)
  //           })
  //           break;
  //       case 12:
  //           nomeGenero = "Aventura";
  //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${idGenero}`, {
  //             method: "GET",
  //             headers: headersList
  //           }).then(response => response.json()).then(generoAventura => {
  //             let responseGeneroAventura = generoAventura.results;
  //             //console.log(responseGeneroAventura)
  //           })
  //           break;
  //       case 16:
  //           nomeGenero = "Animação";
  //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${idGenero}`, {
  //             method: "GET",
  //             headers: headersList
  //           }).then(response => response.json()).then(generoAnimacao => {
  //             let responseGeneroAnimacao = generoAnimacao.results;
  //             //console.log(responseGeneroAnimacao)
  //           })
  //           break;
  //       case 35:
  //           nomeGenero = "Comédia";
  //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${idGenero}`, {
  //             method: "GET",
  //             headers: headersList
  //           }).then(response => response.json()).then(generoComedia => {
  //             let responseGeneroComedia = generoComedia.results;
  //             //console.log(responseGeneroComedia)
  //           })
  //           break;
  //       case 80:
  //           nomeGenero = "Crime";
  //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${idGenero}`, {
  //             method: "GET",
  //             headers: headersList
  //           }).then(response => response.json()).then(generoCrime => {
  //             let responseGeneroCrime = generoCrime.results;
  //             //console.log(responseGeneroCrime)
  //           })
  //           break;
  //       case 99:
  //           nomeGenero = "Documentário";
  //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${idGenero}`, {
  //             method: "GET",
  //             headers: headersList
  //           }).then(response => response.json()).then(generoDocumentario => {
  //             let responseGeneroDocumentario = generoDocumentario.results;
  //             //console.log(responseGeneroDocumentario)
  //           })
  //           break;
  //       case 18:
  //           nomeGenero = "Drama";
  //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${idGenero}`, {
  //             method: "GET",
  //             headers: headersList
  //           }).then(response => response.json()).then(generoDrama => {
  //             let responseGeneroDrama = generoDrama.results;
  //             //console.log(responseGeneroDrama)
  //           })
  //           break;
  //       case 10751:
  //           nomeGenero = "Família";
  //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${idGenero}`, {
  //             method: "GET",
  //             headers: headersList
  //           }).then(response => response.json()).then(generoFamilia => {
  //             let responseGeneroFamilia = generoFamilia.results;
  //             //console.log(responseGeneroFamilia)
  //           })
  //           break;
  //       case 14:
  //           nomeGenero = "Fantasia";
  //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${idGenero}`, {
  //             method: "GET",
  //             headers: headersList
  //           }).then(response => response.json()).then(generoFantasia => {
  //             let responseGeneroFantasia = generoFantasia.results;
  //             //console.log(responseGeneroFantasia)
  //           })
  //           break;
  //       case 36:
  //           nomeGenero = "História";
  //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${idGenero}`, {
  //             method: "GET",
  //             headers: headersList
  //           }).then(response => response.json()).then(generoHistoria => {
  //             let responseGeneroHistoria = generoHistoria.results;
  //             //console.log(responseGeneroHistoria)
  //           })
  //           break;
  //       case 27:
  //           nomeGenero = "Terror";
  //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${idGenero}`, {
  //             method: "GET",
  //             headers: headersList
  //           }).then(response => response.json()).then(generoTerror => {
  //             let responseGeneroTerror = generoTerror.results;
  //             //console.log(responseGeneroTerror)
  //           })
  //           break;
  //       case 10402:
  //           nomeGenero = "Música";
  //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${idGenero}`, {
  //             method: "GET",
  //             headers: headersList
  //           }).then(response => response.json()).then(generoMusica => {
  //             let responseGeneroMusica = generoMusica.results;
  //             //console.log(responseGeneroMusica)
  //           })
  //           break;
  //       case 9648:
  //           nomeGenero = "Mistério";
  //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${idGenero}`, {
  //             method: "GET",
  //             headers: headersList
  //           }).then(response => response.json()).then(generoMisterio => {
  //             let responseGeneroMisterio = generoMisterio.results;
  //             //console.log(responseGeneroMisterio)
  //           })
  //           break;
  //       case 10749:
  //           nomeGenero = "Romance";
  //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${idGenero}`, {
  //             method: "GET",
  //             headers: headersList
  //           }).then(response => response.json()).then(generoRomance => {
  //             let responseGeneroRomance = generoRomance.results;
  //             //console.log(responseGeneroRomance)
  //           })
  //           break;
  //       case 878:
  //           nomeGenero = "Ficção científica";
  //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${idGenero}`, {
  //             method: "GET",
  //             headers: headersList
  //           }).then(response => response.json()).then(generoFiccaoCientifica => {
  //             let responseGeneroFiccaoCientifica = generoFiccaoCientifica.results;
  //             //console.log(responseGeneroFiccaoCientifica)
  //           })
  //           break;
  //       case 10770:
  //           nomeGenero = "Cinema TV";
  //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${idGenero}`, {
  //             method: "GET",
  //             headers: headersList
  //           }).then(response => response.json()).then(generoCinemaTV => {
  //             let responseGeneroCinemaTV = generoCinemaTV.results;
  //             //console.log(responseGeneroCinemaTV)
  //           })
  //           break;
  //       case 53:
  //           nomeGenero = "Thriller";
  //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${idGenero}`, {
  //             method: "GET",
  //             headers: headersList
  //           }).then(response => response.json()).then(generoThriller => {
  //             let responseGeneroThriller = generoThriller.results;
  //             //console.log(responseGeneroThriller)
  //           })
  //           break;
  //       case 10752:
  //           nomeGenero = "Guerra";
  //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${idGenero}`, {
  //             method: "GET",
  //             headers: headersList
  //           }).then(response => response.json()).then(generoGuerra => {
  //             let responseGeneroGuerra = generoGuerra.results;
  //             //console.log(responseGeneroGuerra)
  //           })
  //           break;
  //       case 37:
  //           nomeGenero = "Faroeste";
  //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${idGenero}`, {
  //             method: "GET",
  //             headers: headersList
  //           }).then(response => response.json()).then(generoFaroeste => {
  //             let responseGeneroFaroeste = generoFaroeste.results;
  //             //console.log(responseGeneroFaroeste)
  //           })
  //           break;
  //       default:
  //           nomeGenero = "Genero inexistente";
  //   }
  //   })
  // });

   let slideHeader = document.querySelector('.swiper-wrapper')

   //.slice(-3) limita o forEach em somente 3 elementos
      dataJson.slice(0, 3).forEach((element, index, array) => {
        let idFilme = element.id;
        let tituloPtBr = element.title;
        let sinopsePtBr = element.overview;
        let bannerImage = element.backdrop_path;
        let posterImage = element.poster_path;
        let dataDeLancamento = element.release_date;
        let tempoDeConteudo = element.runtime;
        // console.log(tituloPtBr)

        // METODO PARA SELECIONAR SOMENTE OS 4 DIGITOS DO ANO, 2022
        let anoLancamento = dataDeLancamento.substring(0, 4)
        //console.log(anoLancamento)
        
        //console.log(dataDeLancamento.substring(0, 4))
        //console.log(tituloPtBr)

          fetch(`https://api.themoviedb.org/3/movie/${idFilme}/videos?api_key=35d85489e2e98217e6bb80e10bd639e3&language=pt-BR`,{
            method: "GET",
            headers: headersList,
            }).then(response => response.json()).then(trailerVideo => {
              let dataVideo = trailerVideo["results"];
              dataVideo.slice(0, 1).forEach((element) => {
                let videoKey = element.key
                //console.log(element.key)

                fetch(`https://api.themoviedb.org/3/movie/${idFilme}?api_key=${API_KEY}&language=pt-BR`, { 
                  method: "GET",
                  headers: headersList,
                }).then(response => response.json()).then(dataTime => {
                  // Converter minutos em horas
                  let converter = (minutos) => {
                    let horas = Math.floor(dataTime.runtime/ 60);          
                    let min = dataTime.runtime % 60;
                    let textoHoras = (`00${horas}`).slice(-2);
                    let textoMinutos = (`00${min}`).slice(-2);
                    
                    return `${textoHoras }:${textoMinutos}`;
                  };                  
                  // console.log(converter(60));

                  slideHeader.innerHTML += `
                  <div class="swiper-slide">
                    <img class="img-destaque swiper-slide" src="https://image.tmdb.org/t/p/original/${bannerImage}" title="${tituloPtBr}" alt="${tituloPtBr}">
                    <div class="detalhes-destaque">
                    <h1>${tituloPtBr}</h1>
                    <button class="btnInfo" movie-title="${tituloPtBr}" movie-id="${idFilme}" movie-key="${videoKey}" overview="${sinopsePtBr}">Assistir</button>
                    <button class="btnFavoritos">+</button>
                      <div class="info-detalhes">
                        <span class="spanInfo">${anoLancamento}</span>
                        <span class="spanInfo">/ ${converter(60)} min</span>
                      </div>
                    </div>
                  </div>`
                }) // dataTime
                
                fetch(`https://api.themoviedb.org/3/movie/${idFilme}?api_key=${API_KEY}&language=pt-BR`, { 
                  method: "GET",
                  headers: headersList,
                }).then(response => response.json()).then(modalFilme => {
                  let btnInfo = document.querySelectorAll('.btnInfo')

                  const closeModalButton = document.querySelector("#close-modal");
                  const modal = document.querySelector("#modal");
                  const fade = document.querySelector("#fade");
                  
                  btnInfo.forEach((element) => {
                    const openModalButton = element;
                    
                    element.addEventListener('click', () => {
                      let movieId = element.getAttribute('movie-id')
                      let movieKey = element.getAttribute('movie-key')
                      let movieTitle = element.getAttribute('movie-title')
                      let movieOverview = element.getAttribute('overview')
                      let detalhesDestaque = document.querySelector('body')
                      let btnFechar = document.createElement("button")
                      
                      detalhesDestaque.innerHTML += `
                      <div id="fade" class="hide"></div>
                      <div id="modal" class="hide">
                        <div class="modal-header">
                          <h2 class="modal-h2">Trailer ${movieTitle}</h2>
                          <button id="close-modal">Fechar</button>
                        </div>
                        <div class="modal-body">
                          <iframe class="trailerYoutube" width="100%" height="720" src="https://www.youtube.com/embed/${movieKey}" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div>
                          <h3 class="sinopseTrailer">Sinopse:</h3>
                          <p>${movieOverview}</p>
                        </div>
                      <div class="separador"></div>
                      <div class="filmesSimilares">
                        <h3 class="sinopseTrailer">Similares:</h3>
                      <swiper-container class="mySwiper" navigation="true" pagination="true" pagination-clickable="true" slides-per-view="4">
                      </swiper-container>
                      </div>
                      </div>`
                      fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}&language=pt-BR`, {
                        method: "GET",
                        headers: headersList
                      }).then(response => response.json()).then(filmesSimilares => {
                        let recomendadosSimilaresModal = document.querySelector(".mySwiper");
                        let filmesSimilaresModal = filmesSimilares.results
                        //console.log(recomendadosSimilaresModal)
                        filmesSimilaresModal.forEach((element) => {
                          //let idFilme = element.id;
                          let tituloPtBr = element.title;
                          // let sinopsePtBr = element.overview;
                          let bannerImage = element.backdrop_path;
                          let posterImage = element.poster_path;
                          // let dataDeLancamento = element.release_date;
                          // let tempoDeConteudo = element.runtime;
                          // console.log(element)
                          recomendadosSimilaresModal.innerHTML += `
                          <swiper-slide>
                            <img class="img-filmesSimilares" src="https://image.tmdb.org/t/p/original/${bannerImage}" title="${tituloPtBr}" alt="${tituloPtBr}">
                          </swiper-slide>
                          `
                        })
                      })
                      //console.log(element)
                      //console.log(btnFechar)
                    })
                    openModalButton.addEventListener("click", () => toggleModal());
                  })
                  //console.log(`https://www.youtube.com/watch?v=${element.key}`)
                }) // modalFilme
              }) // dataVideo
            }) // trailerVideo
      }) // dataJson forEach

      const toggleModal = () => {
        modal.classList.toggle("hide");
        fade.classList.toggle("hide");
      };

      closeModalButton.addEventListener('click', () => {
        modal.classList.toggle("hide")
        fade.classList.toggle("hide")
      })
})
();

var i = setInterval(function () {
    
  clearInterval(i);

  // O código desejado é apenas isto:
  document.getElementById("loading").style.display = "none";
  document.getElementById("conteudo").style.display = "inline";

}, 4000);