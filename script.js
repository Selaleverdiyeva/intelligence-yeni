const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
  });

const cardlarDivi = document.querySelector(".section-cards")
window.addEventListener('load',melumatlariGetir)
async function melumatlariGetir(){
    const unvan = "melumatlar.json"
   try{
const istek = await fetch(unvan)
const cavab = await istek.json()
for(let i=0; i<cavab.length; i++){
    cardlarDivi.innerHTML += ` <div class="card">
    <img src="${cavab[i].mukafatin_sekli}" alt="">
    <h1>${cavab[i].mukafatin_adi}</h1>
    <p>${cavab[i].mukafatin_metni}
    </p>
</div>`
}
   }
   catch(error){
    console.log(error);
   }
}


const navbarIconu = document.querySelector(".fa-bars")
const baglamaqIconu = document.querySelector(".fa-xmark")
const overlayMenyuDivi = document.querySelector(".overlay")

navbarIconu.addEventListener("click",function(){
    overlayMenyuDivi.style.width="100%"
}
)
baglamaqIconu.addEventListener("click", function(){
    overlayMenyuDivi.style.width="0"
}
)


const backToTop = document.querySelector(".back-to-top")
window.addEventListener('click',function(){
window.scrollToTop(0,0)
})

function scrollToTop(){
    window.scrollTo(0,0)
}

