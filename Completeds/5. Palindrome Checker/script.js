const palavra = document.querySelector('#palavra')
const mensagem = document.querySelector('.mensagem')

const verificar = () => {
  const palavraArray = palavra.value.split('').join()
  const palavraArrayReverse = palavra.value.split('').reverse().join()

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
