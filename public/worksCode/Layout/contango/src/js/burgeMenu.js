const nav = document.querySelector('.nav')
const body = document.getElementsByTagName('body')[0]

const burgeMenu = () => {
  document.querySelector('.burger-menu').addEventListener('click', (e) => {
    console.log(e.currentTarget)
    if (nav.classList.contains('is-open-menu')) {
      nav.classList.remove('is-open-menu')
      e.currentTarget.classList.remove('is-active-burger')
      body.classList.remove('is-no-scroll')
    } else {
      nav.classList.add('is-open-menu')
      e.currentTarget.classList.add('is-active-burger')
      body.classList.add('is-no-scroll')
    }
  })
}
export default burgeMenu
