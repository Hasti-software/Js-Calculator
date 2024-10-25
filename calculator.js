var num1 = +prompt('Enter the first number : ')
var useroperator = prompt('Enter your operator : \n 1. + \n 2. - \n 3. * \n 4. / \n 5. **')
var num2 = +prompt('Enter the second number : ')

if (useroperator === '1') {
    sum(num1, num2)
} else if (useroperator === '2') {
    tafrigh(num1 , num2)
} else if (useroperator === '3') {
    zarb(num1 , num2)
} else if (useroperator === '4') {
    taghsim(num1, num2)
} else if (useroperator === '5') {
    tavan(num1, num2)
} else {
    alert('check your operator again')
}
function sum(num1, num2) {
    alert(num1 + num2)
}
function tafrigh(num1, num2) {
    alert(num1 - num2)
}
function zarb(num1, num2) {
    alert(num1 * num2)
}
function taghsim(num1, num2) {
    alert(num1 / num2)
}
function tavan(num1, num2) {
    alert(num1 ** num2)
}