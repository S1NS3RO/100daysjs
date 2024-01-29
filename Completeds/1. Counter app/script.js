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
      ? `Passou ${totalDays * -1} dias 🤌`
      : totalDays === -1
      ? 'Foi ontem 🥲'
      : totalDays === 0
      ? 'É hoje 😁'
      : totalDays === 1
      ? 'É amanhã 🥹'
      : totalDays > 1
      ? `Faltam ${totalDays} dias ✌️`
      : 'Selecione uma data'
}
