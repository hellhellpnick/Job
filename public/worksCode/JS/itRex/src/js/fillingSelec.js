const selectorState = document.getElementById('selector-state')

const fillingInTheSelector = async (data) => {
  const result = []

  for (let i = 0; i <= data.length - 1; i++) {
    for (let key in data[i]) {
      if (key == 'adress') {
        if (!result.includes(data[i][key].state)) {
          result.push(data[i][key].state)
        }
      }
    }
  }

  result.forEach((el) => {
    let option = document.createElement('option')
    option.innerHTML = el
    selectorState.appendChild(option)
  })

  let option = document.createElement('option')
  option.innerHTML = 'Nothing'
  selectorState.prepend(option)
  selectorState.value = 'Nothing'

  return
}

export default fillingInTheSelector
