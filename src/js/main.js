
import languages from '../translate.js'

AOS.init();


const langSelect = document.querySelector('#languageSwitcher')
const allLanguages = ['en', 'ru', 'uz']
const languageElements = document.querySelectorAll('.languages a')

const hash = window.location.hash.substring(1)
if (hash == '' || !allLanguages.includes(hash)) {
  location.href = window.location.pathname + '#en'
  location.reload()
}
languageElements.forEach(el => {
  if (el.attributes.language.value == hash)
    el.classList.add('active')
})

for (let key in languages) {
  document.querySelector('.lng-' + key).textContent = languages[key][hash]
}


languageElements.forEach(el => el.addEventListener('click', () => {
  document.querySelector('.active').classList.remove('active');
  el.classList.add('active')
  const currentLang = el.getAttribute('language');
  location.href = window.location.pathname + `#${currentLang}`
  for (let key in languages) {
    document.querySelector('.lng-' + key).textContent = languages[key][currentLang]
  }

}))


// languageElements.addEventListener('click', changelanguage())

// function changeURLlanguage() {
//   let lang = langSelect.value;
//   location.href = window.location.pathname + `#${lang}`
//   location.reload()
// }

// function changelanguage() {
//   const hash = window.location.hash.substring(1)
//   if (!allLanguages.includes(hash)) {
//     location.href = window.location.pathname + '#ru'
//     location.reload()
//   }
//   langSelect.value = hash
//   for (let key in languages) {
//     document.querySelector('.lng-' + key).innerHTML = languages[key][hash]
//   }
// }

$(document).ready(function () {
  $('.single-item').slick({
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  $('button.slick-arrow').click(function () {
    $('details').removeAttr('open');
  });
})
