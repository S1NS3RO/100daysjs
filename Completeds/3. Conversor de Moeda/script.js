const radio_USD = document.querySelector('#USD')
const radio_EUR = document.querySelector('#EUR')
const radio_BTC = document.querySelector('#BTC')
const blr_value = document.querySelector('.blr_value')
const real_input = document.querySelector('#real')

const atualizaFetch = () => {
  let newValue
  fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
    .then(response => response.json())
    .then(data => {
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
    .catch(err => console.log(err))
}

atualizaFetch()