//navigation
const langUa = document.getElementById('lang-ua')
const langEn= document.getElementById('lang-en')
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu-links');
const menuItem = document.querySelectorAll('.nav__link');


langUa.addEventListener('click', () => {
    if(!langUa.classList.contains('language__item_active')){
        toggleClasses();
    }
})

langEn.addEventListener('click', () => {
    if(!langEn.classList.contains('language__item_active')){
        toggleClasses();
    }
})

function toggleClasses(){
    langUa.classList.toggle("language__item_active");
    langUa.classList.toggle("language__item_no-act");
    langEn.classList.toggle("language__item_active");
    langEn.classList.toggle("language__item_no-act");
}  


menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

menuItem.forEach (function(menuItem) {
  menuItem.addEventListener('click',function(){
          menuBtn.classList.toggle('active');
          menu.classList.toggle('active');
  })
})


//scroll section

const btnScrollRight = document.getElementById('btn-scroll-right');
const btnScrollLeft = document.getElementById('btn-scroll-left');
const conent =  document.getElementById('scroll-container');
   
btnScrollRight.addEventListener("click", function(event) {
   conent.scrollLeft += 300;
    event.preventDefault();
    checkScrollAvailability(); 
  });

  btnScrollLeft.addEventListener("click", function(event) {
   conent.scrollLeft -= 300;
    event.preventDefault();
    checkScrollAvailability(); 
  }); 

 
function checkScrollAvailability() {
    const isScrollLeftPossible = conent.scrollLeft > 0;
    const isScrollRightPossible = conent.scrollLeft + conent.clientWidth < conent.scrollWidth;

   if (isScrollLeftPossible) {
       btnScrollLeft.classList.remove("btn-scroll-no-active");
    } else {
        btnScrollLeft.classList.add("btn-scroll-no-active");
    }

    if (isScrollRightPossible) {
        btnScrollRight.classList.remove("btn-scroll-no-active");
    } else {
        btnScrollRight.classList.add("btn-scroll-no-active");
    }
}

//slider 

var splide = new Splide( '.splide', {
    type  : 'fade',
    rewind: true,
  } );
  
  splide.mount();