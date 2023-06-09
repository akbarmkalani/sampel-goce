let _togl = document.querySelector('._cart')
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
const friba = document.querySelectorAll('#friba>figure')

/* document.getElementById('hamburgerIcon').addEventListener('click', function(event){
            _span = event.children
            console.log(_span);
})
 */
let flag = 1

const _h = document.querySelector('.humbargerMenu').clientHeight
document.querySelector('.humbargerMenu').style.height = '0'
console.log(_h);

function hamburgerIcon(event){
  _span = event.children
     if(flag % 2){
     
      _span[1].style.opacity= '0'
      _span[0].style.transform='rotate(44deg)'
      _span[2].style.transform='rotate(-44deg)'
      document.querySelector('.humbargerMenu').style.height = _h+'px'
     
      
     } else{
      _span[1].style.opacity= '1'
      _span[0].style.transform='rotate(0deg)'
    
      _span[2].style.transform='rotate(0deg)'
      document.querySelector('.humbargerMenu').style.height = '0'
     }
     flag++
}


document.getElementById('_cart').addEventListener('click', function () {

  _togl.style.opacity = "  1"
})
document.getElementById("_cart").addEventListener('mouseenter', function () {

  _togl.style.opacity = "  0"
})

document.getElementById("search_").addEventListener("click", function () {
  document.querySelector('.search-box').style.opacity = "1"
  document.querySelector('.search-box').style.visibility = "visible"
})


document.querySelector(".close").addEventListener("click", function (e) {
  e.stopPropagation()
  document.querySelector('.search-box').style.opacity = "0"
  document.querySelector('.search-box').style.visibility = "hidden"
})



const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },

  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});


/* top swiperslider to top */


const topSwiper = new Swiper("._mySwiper", {
  //direction: "vertical",
  slidesPerView: 1,
  mousewheel: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});



friba.forEach((val) => {
  val.addEventListener("click", function () {
    let temp = val.children[0]

    temp.style.border = '4px solid #E8AE1A '
  })
  val.addEventListener("mouseleave", function () {
    let temp = val.children[0]

    temp.style.border = '4px solid #565555'
  })
})


const roSwiper = new Swiper("#myswiper", {

  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});