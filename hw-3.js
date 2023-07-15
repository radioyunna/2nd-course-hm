//Задание 1

let password = 'пароль';
let answer = prompt("Введите свой пароль");
if (answer === 'пароль') {
    console.log('Пароль введен правильно');
} else {
    console.log('Пароль введен неправильно');
}

//Задание 2

let c = 2;
if (c>0 && c<10) {
    console.log('Верно')
} else {
    console.log('Не верно')
}

//Задание 3

let d = 6;
let e = 200;
if (d<100 || e<100) {
    console.log('Верно');
} else {
    console.log('Не верно');
}

//Задание 4

let a = '2';
let b = '3';

alert (a + b - 18);

//Задание 5

let monthNumber = prompt('Введи номер месяца');
switch (monthNumber) {
    case '1':
        console.log('Это зима');
        break;
    case '2':
        console.log('Это зима');
        break;
    case '3':
        console.log('Это весна');
        break;    
    case '4':
        console.log('Это весна');
        break;
    case '5':
        console.log('Это весна');
        break;
    case '6':
        console.log('Это лето');
        break;
    case '7':
        console.log('Это лето');
        break;
    case '8':
        console.log('Это лето');
        break;
    case '9':
        console.log('Это осень');
        break;
    case '10':
        console.log('Это осень');
        break;
    case '11':
        console.log('Это осень');
        break;
    case '12':
        console.log('Это зима');
        break;
    default:
        console.log('Такого месяца не существует');
        break;
}
