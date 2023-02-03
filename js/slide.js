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
                    <img class="img-destaque swiper-slide" src="https://image.tmdb.org/t/p/original/${bannerImage}" title=${tituloPtBr} alt="${tituloPtBr}">
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
                        <p>${movieOverview}</p>
                      </div>`
                      console.log(element)
                    })
                    openModalButton.addEventListener("click", () => toggleModal());
                  })
                  //console.log(`https://www.youtube.com/watch?v=${element.key}`)
                }) // modalFilme
                const toggleModal = () => {
                  modal.classList.toggle("hide");
                  fade.classList.toggle("hide");
                };
            
                closeModalButton.addEventListener('click', () => {
                  modal.classList.toggle("hide")
                  fade.classList.toggle("hide")
                })
              }) // dataVideo
            }) // trailerVideo
      }) // dataJson forEach
})
();

var i = setInterval(function () {
    
  clearInterval(i);

  // O código desejado é apenas isto:
  document.getElementById("loading").style.display = "none";
  document.getElementById("conteudo").style.display = "inline";

}, 4000);