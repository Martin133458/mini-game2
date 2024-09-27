let randomNumber = Math.floor(Math.random() * 100) +1

const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')


btn.addEventListener('click' , () => {
 const userGuess = Number(input.value)

 if(!userGuess  ||  userGuess < 1  ||  userGuess > 100 ) {
  result.innerText = 'Введите число от 1 до 100!'
 } else if (userGuess == randomNumber) {
    result.innerText = `Поздравляю вы угадали`

    setTimeout(() => {
        randomNumber = Math.floor(Math.random() * 100) +1
        result.innerText = `Загадонное число обновлено!  Угадай снова`
    }, 3000);
 } else if (userGuess < randomNumber) {
    result.innerText = ` Число ${userGuess} меньше `
 } else {
    result.innerText = `Число ${userGuess} больше`
 } 
})