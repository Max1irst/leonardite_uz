
import languages from '../translate.js'

const langSelect = document.querySelector('#languageSwitcher')
const allLanguages = ['en', 'ru', 'uz']

langSelect.addEventListener('change', changeURLlanguage)

function changeURLlanguage() {
  let lang = langSelect.value;
  location.href = window.location.pathname + `#${lang}`
  location.reload()
}

function changelanguage() {
  const hash = window.location.hash.substring(1)
  if (!allLanguages.includes(hash)) {
    location.href = window.location.pathname + '#ru'
    location.reload()
  }
  langSelect.value = hash
  for (let key in languages) {
    document.querySelector('.lng-' + key).innerHTML = languages[key][hash]
  }
}
changelanguage()
AOS.init();


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
