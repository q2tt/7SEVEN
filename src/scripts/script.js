const langUa = document.getElementById('lang-ua')
const langEn= document.getElementById('lang-en')

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