const abrir = document.querySelector('.wrapper a')
const wrapperModal = document.querySelector('.wrapperModal')
const fechar = document.querySelector('.fechar')
const modal = document.querySelector('.modal')
const wrapper = document.querySelector('.wrapper')

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
