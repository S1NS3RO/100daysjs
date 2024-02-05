const sections = document.querySelectorAll('section')

sections.forEach((section) => {
  const h1 = section.querySelector('h1')
  const contentDiv = section.querySelector('.content')
  const biPlusLg = section.querySelector('.bi-plus-lg')
  const biDashLg = section.querySelector('.bi-dash-lg')

  h1.addEventListener('click', () => {
    if (contentDiv.style.height === '0px' || contentDiv.style.height === '') {
      // Abrir
      contentDiv.style.height = contentDiv.scrollHeight + 32 + 'px'
      contentDiv.style.padding = '1rem'
      biPlusLg.style.display = 'none'
      biDashLg.style.display = 'block'
    } else {
      // Fechar
      contentDiv.style.height = '0px'
      contentDiv.style.padding = '0 1rem'
      biPlusLg.style.display = 'block'
      biDashLg.style.display = 'none'
    }
  })
})

// 1. Counter App
const nowDate = document.querySelector('.nowDate')
const selectedDate = document.querySelector('#dateTime')
const newDate = document.querySelector('.newDate')

const date = new Date()
const currentDay = date.getDate().toString().padStart(2, '0')
const currentMonth = (date.getMonth() + 1).toString().padStart(2, '0')
const currentYear = date.getFullYear()

nowDate.innerHTML = `${currentDay}/${currentMonth}/${currentYear}`

function obterData() {
  const formattedDate = new Date(selectedDate.value + 'T00:00:00')

  const timeDiff = formattedDate.getTime() - date.getTime()
  const totalDays = Math.ceil(timeDiff / (1000 * 3600 * 24))

  newDate.innerHTML =
    totalDays < -1
      ? `Passaram ${totalDays * -1} dias 🙏`
      : totalDays === -1
      ? 'Foi ontem 🤔'
      : totalDays === 0
      ? 'É hoje 😁'
      : totalDays === 1
      ? 'É amanhã 😎'
      : totalDays > 1
      ? `Faltam ${totalDays} dias ✌️`
      : 'Selecione uma data 🤠'
}

// 2. Random Hex Color Generator
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

// 3. Conversor de Moeda
const radio_USD = document.querySelector('#USD')
const radio_EUR = document.querySelector('#EUR')
const radio_BTC = document.querySelector('#BTC')
const blr_value = document.querySelector('.blr_value')
const real_input = document.querySelector('#real')

const atualizaFetch = () => {
  let newValue
  fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      if (radio_USD.checked) {
        newValue = data.USDBRL.high * real_input.value
      }
      if (radio_EUR.checked) {
        newValue = data.EURBRL.high * real_input.value
      }
      if (radio_BTC.checked) {
        newValue = data.BTCBRL.high * real_input.value
      }
      blr_value.innerHTML = newValue.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
    })
    .catch((err) => console.log(err))
}

atualizaFetch()
// 4. Modal, Popup
const abrir = document.querySelector('.wrapper a')
const wrapperModal = document.querySelector('.wrapperModal')
const fechar = document.querySelector('.fechar')
const modal = document.querySelector('.modal')

let isOpen = false

abrir.addEventListener('click', () => {
  isOpen = true
  openClose()
})

const abriu = () => {
  console.log('abriu o modal')

  const handleClickSide = (e) => {
    if (e.target !== modal) {
      isOpen = false
      openClose()
      document.removeEventListener('click', handleClickSide)
    }
  }
  document.addEventListener('click', handleClickSide)
}

const openClose = () => {
  console.log('isOpen', isOpen)
  if (isOpen) {
    wrapperModal.style.display = 'flex'

    setTimeout(() => {
      abriu()
    }, 50)
  } else {
    wrapperModal.style.display = 'none'
  }
}
// 5. Palindrome Checker
const palavra = document.querySelector('#palavra')
const mensagem = document.querySelector('.mensagem')

const verificar = () => {
  const palavraArray = palavra.value.toUpperCase().split('').join()
  const palavraArrayReverse = palavra.value.toUpperCase().split('').reverse().join()

  if (palavra.value === '') {
    mensagem.classList.remove('false')
    mensagem.classList.remove('true')
    mensagem.innerHTML = `Digite uma palavra`
  } else if (palavraArray === palavraArrayReverse) {
    mensagem.classList.remove('false')
    mensagem.classList.add('true')
    mensagem.innerHTML = `<b>${palavra.value}</b><br/>É um palíndromo`
  } else {
    mensagem.classList.remove('true')
    mensagem.classList.add('false')
    mensagem.innerHTML = `<b>${palavra.value}</b><br/>Não é um palíndromo`
  }
}
