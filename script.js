// if (1 == 1) {
//    console.log('верно');
// }

// console.log(5 == 5);

// var a = prompt ('Введите слово Привет');

// if (a == 'Привет') {
//     console.log('Вы ввели правильное слово');
// }else{
//     console.log('Вы ввели не правильное слово');
// }


// var b = +prompt('Веддите цифру 1')

// if(b === 1) {
//     console.log('Значение и тип равны')
// } else if (b == 1) {
//     console.log('значения равны');
// } else {
//     console.log('Ошибка');
// }


// HW
// a
var age = +prompt('Введите свой возраст')

if (age > 0 && age <= 18) {
    alert('Вы еще молоды, Вам нужно учиться');
} else if (age >= 18 && age <= 50) {
    alert('Вам нужно работать');
} else if (age >= 50 && age <= 59) {
    alert('Вам скоро на пенсию');
} else if (age >= 59 && age <= 100) {
    alert('Вы пенсионер');
} else {
    alert('Что-то пошло не так');
}

// b
var time = +prompt('Введите время в цифрах')

switch (time) {
    case 0:
        alert('полночь')
        break;
    case 1:
        alert('час ночи')
        break;
    case 2:
        alert('2 часa ночи')
        break;
    case 3:
        alert('3 часa ночи')
        break;
    case 4:
        alert('4 часa ночи')
        break;
    case 5:
        alert('5 часов ночи')
        break;
    case 6:
        alert('6 часов ночи')
        break;
    case 1:
        alert('час ночи')
        break;
    case 7:
        alert('7 часа утра')
        break;
    case 8:
        alert('8 часов утра')
        break;
    case 9:
        alert('9 часов утра')
        break;
    case 10:
        alert('10 часов утра')
        break;
    case 11:
        alert('11 часов дня')
        break;
    case 12:
        alert('12 часов дня')
        break;
    case 13:
        alert('час дня')
        break;
    case 14:
        alert('2 часа дня')
        break;
    case 15:
        alert('3 часа дня')
        break;
    case 16:
        alert('4 часа дня')
        break;
    case 17:
        alert('5 часов дня')
        break;
    case 18:
        alert('6 часов вечера')
        break;
    case 19:
        alert('7 часов вечера')
        break;
    case 20:
        alert('8 часов вечера')
        break;
    case 21:
        alert('9 часов вечера')
        break;
    case 22:
        alert('10 часов вечера')
        break;
    case 23:
        alert('11 часов вечера')
        break;
    case 24:
        alert('полночь')
        break;
    default:
        alert('такого времени не существует')
        break;
}

// c
// var X = +prompt('Введите первое число')
// var Y = +prompt('Введите второе число')
// var Z = +prompt('Введите третье число')

// if (X < Y && X > Z) {
//     alert('Среднее число X')
// }