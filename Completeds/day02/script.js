const wrapper = document.querySelector('.wrapper')
const color_box = document.querySelector('#color')
const hex_span = document.querySelector('.hex_span')
const generate_btn = document.querySelector('.generate_btn')

let randomColor = '#'
let newColor = '#ff0f0f'

hex_span.addEventListener('click', () => {
  navigator.clipboard
    .writeText(newColor)
    .then(function () {
      console.log('Texto copiado para a área de transferência')
    })
    .catch(function (err) {
      console.error('Erro ao copiar texto: ', err)
    })
})

generate_btn.addEventListener('click', () => {
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.random()
    let charCode

    if (randomNumber > 0.5) {
      charCode = Math.floor(Math.random() * 10) + 48
    } else {
      charCode = Math.floor(Math.random() * 6) + 65
    }
    randomColor += String.fromCharCode(charCode)
  }

  newColor = randomColor
  randomColor = '#'

  document.documentElement.style.setProperty('--inicial-color', newColor)
  color_box.value = newColor
  hex_span.innerHTML = newColor
})