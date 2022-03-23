const sliderCardsChoose = () => {
  $('.wrapper-choose').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 300,
    fade: true,
    infinite: true,
    dots: true,
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right'),

    customPaging: function (slider, i) {
      jQuery(slider.$slides[i]).data()
      return `<img src='./images/person1.png'>`
    },
  })

  const wrapper = document.querySelector('.wrapper-choose')
  const list = wrapper.getElementsByTagName('li')

  for (let i = 0; i <= list.length - 1; i++) {
    const span = document.createElement('span')
    const img = document.createElement('img')

    span.classList.add('span-img')
    img.src = './images/bitcoin.png'
    span.insertAdjacentElement('afterbegin', img)

    if (i === 1) {
      const spanLang = document.createElement('span')
      const lang = document.createElement('img')

      spanLang.classList.add('span-img', 'span-language')
      lang.src = './images/language.png'
      spanLang.insertAdjacentElement('afterbegin', lang)

      list[i].appendChild(spanLang)
    }

    list[i].appendChild(span)
  }
}

export default sliderCardsChoose
