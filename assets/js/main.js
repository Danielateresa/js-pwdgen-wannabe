const yourName = prompt('Scrivi il tuo nome')
console.log(yourName)

const yourSurname = prompt('Scrivi il tuo cognome')
console.log(yourSurname)

const favouriteColor = prompt('Scrivi il tuo colore preferito')
console.log(favouriteColor)

document.getElementById('password').innerHTML = `La tua password insicurissima è: ${yourName}${yourSurname}${favouriteColor}22`