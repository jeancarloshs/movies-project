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
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 1,
      }
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
        let sinopsePtBr = element.overview
        let bannerImage = element.backdrop_path;
        let posterImage = element.poster_path;
        let dataDeLancamento = element.release_date;
        let tempoDeConteudo = element.runtime;
        console.log(tituloPtBr)
        // METODO PARA SELECIONAR SOMENTE OS 4 DIGITOS DO ANO, 2022
        let anoLancamento = dataDeLancamento.substring(0, 4)
        //console.log(anoLancamento)
        
        //console.log(dataDeLancamento.substring(0, 4))
        //console.log(tituloPtBr)

        for (let i = 0; i < 3; i++) {
          console.log(dataJson[i])
          slideHeader.innerHTML += `
          <div class="swiper-slide">
            <img class="img-destaque swiper-slide" src="https://image.tmdb.org/t/p/original/${bannerImage}" title="${tituloPtBr}" alt="${tituloPtBr}">
            <div class="detalhes-destaque">
            <h1>${tituloPtBr}</h1>
            <button class="btnInfo">Assistir</button>
            <button class="btnFavoritos">+</button>
            <div class="info-detalhes">
              <img class="infoImg" src="./assets/images/destaque/12 1.png" alt="Indicação 12 Anos">
              <img class="infoImg" src="./assets/images/destaque/4K 1.png" alt="Resolução 4K">
              <span class="spanInfo">${tempoDeConteudo} min</span>
              <span class="spanInfo">${anoLancamento}</span>
            </div>
          </div>
          </div>`
          break;
        }
      });
})
();



(async () => {
  let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)"
   }
   
   let response = await fetch(`https://api.themoviedb.org/3/movie/${resIdFilme}?api_key=${API_KEY}&language=pt-BR`, { 
     method: "GET",
     headers: headersList,
   });
   
   let data = await response.json();
   let dataJson = data
   console.log(dataJson.runtime)
})
();