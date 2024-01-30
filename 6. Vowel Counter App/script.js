const text = document.querySelector('#text')
const consoantesPg = document.querySelector('.consoantes')
const vogaisPg = document.querySelector('.vogais')
const outrasPg = document.querySelector('.outras')

const alfabeto = []
for (let i = 65; i <= 90; i++) {
  alfabeto.push(String.fromCharCode(i))
}

const vogais = String.fromCharCode(65, 69, 73, 79, 85).split('')

const consoantes = alfabeto.filter(l => !vogais.includes(l))

const contar = () => {
  let letras = text.value.toUpperCase().split('')

  let consoantesSeparadas = []
  let vogaisSeparadas = []
  let outrasSeparadas = []

  letras.map(letra => {
    if (consoantes.includes(letra)) {
      consoantesSeparadas.push(letra)
    } else if (vogais.includes(letra)) {
      vogaisSeparadas.push(letra)
    } else {
      if (letra === ' ') {
        outrasSeparadas.push('[Espaço]')
      } else {
        outrasSeparadas.push(letra)
      }
    }
  })

  consoantesPg.innerHTML = `${consoantesSeparadas.length}<br/> -> ${consoantesSeparadas}`

  vogaisPg.innerHTML = `${vogaisSeparadas.length}<br/> -> ${vogaisSeparadas}`

  outrasPg.innerHTML = `${outrasSeparadas.length}<br/> -> ${outrasSeparadas}`
}

contar()
