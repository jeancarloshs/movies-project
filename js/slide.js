const swiper = new Swiper('.swiper', {
  // Optional parameters
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 1,
  spaceBetween: -400,
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

let API_KEY = '35d85489e2e98217e6bb80e10bd639e3';

(async () => {
  let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)"
   }
   
   let response = await fetch(`https://api.themoviedb.org/3/movie/now_playing/?api_key=${API_KEY}&language=pt-BR`, { 
     method: "GET",
     headers: headersList
   });
   
   let data = await response.json();
   let dataJson = data["total_pages"]
   //console.log(data);
   //console.log(dataJson)

   let lista = []

   for(let i = 1; i < dataJson; i++) {
      let response = await fetch(`https://api.themoviedb.org/3/movie/now_playing/?api_key=${API_KEY}&page=${i}&language=pt-BR`, { 
        method: "GET",
        headers: headersList
      });
      
      let data = await response.json();
      let dataJson = data['results']
      dataJson.forEach((element, index) => {
        lista.push(element)
        //console.log(element.id, element.original_title)
      });
      //console.log(data);
      //console.log(dataJson)
   }

console.log(lista)
  //  dataJson.forEach((element, index) => {
  //   console.log(element.id, element.original_title)
  //  });

})
();