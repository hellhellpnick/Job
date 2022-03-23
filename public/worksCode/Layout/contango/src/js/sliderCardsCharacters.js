const header = document.querySelector('.layout-header')
const cards = header.querySelectorAll('.card-character')
const wrapperCards = document.querySelector('.wrapper-cards')
const list = wrapperCards.getElementsByTagName('li')

const forCardList = () => {
  if (window.innerWidth >= 1366) {
    for (let i = 0; i <= cards.length - 1; i++) {
      if (cards[i].classList.contains('is-opacity-card')) {
        cards[i].classList.remove('is-opacity-card')
        console.log('ok')
        break
      }
    }

    for (let i = 0; i <= cards.length - 1; i++) {
      if (
        cards[i].classList.contains('slick-active') &&
        i !== cards.length - 1
      ) {
        cards[i + 1].classList.add('is-opacity-card')
        break
      }
    }

    for (let i = 0; i <= cards.length - 1; i++) {
      if (cards[i].classList.contains('is-hidden-card')) {
        cards[i].classList.remove('is-hidden-card')
        break
      }
    }

    for (let i = 0; i <= cards.length - 1; i++) {
      if (
        !cards[i].classList.contains('slick-active') ||
        cards[i].classList.contains('is-opacity-card')
      ) {
        cards[i].classList.add('is-hidden-card')
      }
    }

    for (let i = 0; i <= cards.length - 1; i++) {
      if (cards[i].classList.contains('is-hidden-card')) {
        cards[i].classList.remove('is-hidden-card')
      }
    }

    for (let i = 0; i <= cards.length - 1; i++) {
      if (
        !cards[i].classList.contains('slick-active') ||
        cards[i].classList.contains('is-opacity-card')
      ) {
        cards[i].classList.add('is-hidden-card')
      }
    }
  }
}

const sliderCardsCharacters = () => {
  $('.wrapper-cards').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    nextArrow: false,
    prevArrow: false,
    responsive: [
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  })

  forCardList()

  cards.forEach((item) =>
    item.addEventListener('click', () => {
      forCardList()
    })
  )

  for (let i = 0; i <= list.length - 1; i++) {
    list[i].addEventListener('click', forCardList)
  }

  $('.wrapper-cards').on('wheel', function (e) {
    e.preventDefault()

    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickNext')
      forCardList()
    } else {
      $(this).slick('slickPrev')
      forCardList()
    }
  })
}

export default sliderCardsCharacters
