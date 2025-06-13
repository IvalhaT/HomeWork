 // 1.Создайте переменные str1='Hello' и str2='world'. С помощью методов работы со строками вывести в консоль фразу 'Hello, world!'.

// const str1 = 'Hello'
// const str2 = 'world'
// const str = str1.concat(', ',str2,'!')
// console.log(str)



// 2.Дана строка 'I learn computer science!'. Замените все пробелы на '_'.

// const str3 = 'I learn computer science!'
// const str = str3.replaceAll(' ', '_')
// console.log(str)



// 3.Дана строка 'I learn computer science!'. Выведите в консоль длину строки (сколько символов содержит строка)

// const str4 = 'I learn computer science!'
// console.log(str4.length)



// 4.Создать строку длиной 10. Сделайте так (да-да, вручную) чтобы на выходе она была забором. пример: "Я УчУсЬ В It-aCaDeMy".

// let str5 = 'ЭТНОГРАФИЯ'
//
// let char0 = str5[0].toUpperCase()
// let char1 = str5[1].toLowerCase()
// let char2 = str5[2].toUpperCase()
// let char3 = str5[3].toLowerCase()
// let char4 = str5[4].toUpperCase()
// let char5 = str5[5].toLowerCase()
// let char6 = str5[6].toUpperCase()
// let char7 = str5[7].toLowerCase()
// let char8 = str5[8].toUpperCase()
// let char9 = str5[9].toLowerCase()
//
// const str = char0 + char1 + char2 + char3 + char4 + char5 + char6 + char7 + char8 + char9
//
// console.log(str)



// 5.В переменной min записано число. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую)

//  const min = 15
//
// if ( min <= 15){
//     console.log('первая четверть часа')
// } else if (min > 15 && min <= 30) {
//     console.log('вторая четверть часа')
// } else if ( min > 30 && min <= 45 ) {
//     console.log('третья четверть часа')
// } else if ( min > 45 && min <=59) {
//     console.log('четвертая четверть часа')
// } else if (min < 0 || min > 59) {
//     console.log('укажите в минутах от 0 до 59')
// }



// 6.
//     а)написать программу, которая будет выводить название дней недели в зависимости от выбранного языка
//     (как минимум русский и английский) используя if. язык можно вводить с клавиатуры, можно писать сразу в коде


// let lang = 'ru'
// let days
//
// if (lang === 'ru') {
//     days = ['понедельник',
//         'вторник',
//         'среда',
//         'четверг',
//         'пятница',
//         'суббота',
//         'воскресение']
// } else if (lang === 'en') {
//     days = ['Sunday',
//         'Monday',
//         'Tuesday',
//         'Wednesday',
//         'Thursday',
//         'Friday',
//         'Saturday']
// } else {
//     console.log('en or ru only')
// }
// console.log(days)

    // б) то же самое, используя switch

let lang = 'en'
let days

switch (lang) {
    case 'ru':
        days = ['понедельник',
            'вторник',
            'среда',
            'четверг',
            'пятница',
            'суббота',
            'воскресение']
        break;

    case 'en':
        days = ['Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'];
        break;

    default: console.log('en or ru only')
        break
}

console.log(days)



// 7. Имеется объект с полями name и age. Если имя не заполнено - записать имя как John/Jane Doe
// 8. Если имя будет Jane - вывести ее данные вида ‘This is Jane. She is 21’

// let person = {
//     name: 'Tom',
//     age: '20',
// }
//
// if (!person.name) {
//     console.log(person.name = 'John/Jane Doe')
// } else {
//     console.log(person)
// }
// if(person.name === 'Jane') {
//     console.log('This is Jane. She is ' +`${person.age}`)
// }
