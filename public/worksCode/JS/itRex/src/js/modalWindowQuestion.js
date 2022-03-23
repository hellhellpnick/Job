//function creating new modal window from asking a question//
const createModalWindowForQuestion = async (id, arr) => {
  const div = document.createElement('div'),
    btnOk = document.createElement('button'),
    btnClose = document.createElement('button'),
    pForDiv = document.createElement('p'),
    form = document.createElement('form'),
    body = document.getElementsByTagName('body')[0]

  div.classList.add('position-center', 'box-column')
  btnClose.classList.add('form-add-btn')
  btnOk.classList.add('form-add-btn')

  pForDiv.innerHTML = 'Are you sure to delete?'
  btnOk.innerHTML = 'Ok'
  btnClose.innerHTML = 'Close'

  div.appendChild(pForDiv)
  div.appendChild(form)
  form.appendChild(btnOk)
  form.appendChild(btnClose)

  document.getElementsByTagName('body')[0].appendChild(div)
  body.classList.toggle('is-dont-point-event')

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const tableAllTR = document.querySelectorAll('tr')

    //delete unnecessary TR//
    for (let i = 1; i <= tableAllTR.length - 1; i++) {
      if (id) {
        if (tableAllTR[i].id === id) {
          arr.unshift(tableAllTR[i].id)
          tableAllTR[i].remove()
        }
      } else if (tableAllTR[i].children[0].children[0].checked) {
        arr.unshift(tableAllTR[i].id)
        tableAllTR[i].remove()
      }
    }

    div.remove()
    body.classList.toggle('is-dont-point-event')

    document.querySelector('#checkbox-main').checked = false
  })

  btnClose.addEventListener('click', () => {
    div.remove()
    body.classList.toggle('is-dont-point-event')
  })
  return
}

export default createModalWindowForQuestion
