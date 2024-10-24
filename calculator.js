var num1 = +prompt('enter the first number : ')
var useroperator = prompt('enter your operator : \n 1. + \n 2. - \n 3. * \n 4. / \n 5. **')
var num2 = +prompt('enter the second number : ')

if (useroperator === '1') {
    plural(num1, num2)
} else if (useroperator === '2') {
    minus(num1 , num2)
} else if (useroperator === '3') {
    multiplication(num1 , num2)
} else if (useroperator === '4') {
    division(num1, num2)
} else if (useroperator === '5') {
    power(num1, num2)
} else {
    alert('check your operator again')
}
function plural(num1, num2) {
    alert(num1 + num2)
}
function minus(num1, num2) {
    alert(num1 - num2)
}
function multiplication(num1, num2) {
    alert(num1 * num2)
}
function division(num1, num2) {
    alert(num1 / num2)
}
function power(num1, num2) {
    alert(num1 ** num2)
}
