const sliderCardsCost = () => {
  $('.wrapper-cost').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 300,
    fade: true,
    infinite: true,
    dots: true,
    prevArrow: $('.arrow-left-cost'),
    nextArrow: $('.arrow-right-cost'),

    customPaging: function (slider, i) {
      jQuery(slider.$slides[i]).data()
      return `<img src='./images/person1.png'>`
    },
  })

  const wrapperCost = document.querySelector('.layout-cost')
  const listCost = wrapperCost.getElementsByTagName('li')

  for (let i = 0; i <= listCost.length - 1; i++) {
    const span = document.createElement('span')

    span.classList.add('span-button')
    span.innerHTML = 3000

    listCost[i].appendChild(span)
  }
}

export default sliderCardsCost
