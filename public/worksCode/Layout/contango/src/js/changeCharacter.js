const characters = document.querySelector('.layout-character').children
let indexCharacter = 0

const changePerson = () => {
  console.log(indexCharacter)
  if (indexCharacter == characters.length - 1) {
    characters[0].classList.remove('is-hidden-character')
    characters[indexCharacter].classList.add('is-hidden-character')
    indexCharacter = 0
  } else {
    indexCharacter += 1
    characters[indexCharacter].classList.remove('is-hidden-character')
    characters[indexCharacter - 1].classList.add('is-hidden-character')
  }

  console.log(indexCharacter)
}

const changeCharacter = () => {
  for (let i = 0; i <= characters.length - 1; i++) {
    const buttonCharacter = characters[i].querySelector('.character-button')

    buttonCharacter.addEventListener('click', () => changePerson())
  }
}

export default changeCharacter
