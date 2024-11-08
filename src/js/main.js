
import languages from '../translate.js'

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
  let elem = document.querySelector('.lng-' + key)
  if (elem && languages[key][hash])
    elem.innerHTML = languages[key][hash]
}


languageElements.forEach(el => el.addEventListener('click', () => {
  document.querySelector('.active').classList.remove('active');
  const currentLang = el.getAttribute('language');
  location.href = window.location.pathname + `#${currentLang}`
  location.reload()

  for (let key in languages) {
    let elem = document.querySelector('.lng-' + key)
    if (elem && languages[key][currentLang]) {
      elem.innerHTML = languages[key][currentLang]
    } else {
      return
    }
  }
}))

$(document).ready(function () {
  AOS.init();
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
