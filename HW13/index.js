// 1. Создайте массив с дубликатами и напишите код, который удаляет все дубликаты, оставляя только уникальные значения. Выведите новый массив в консоль.

const array = [1, 1, 2, 3, 3, 3, 4, 5, 6, 6, 7, 8, 9, 10, 10];

const result = []

for (let i = 0; i < array.length; i++) {
    if(!result.includes(array[i])) {
        // если элемент не содержится в массиве, то...
        result.push(array[i])
    }
}
console.log(result)



// 2. Создайте переменную с числом и используйте цикл для вычисления его факториала.

let number = 5

let factorial = 1
let i = 1

while (i <= number) {
    factorial *= i;
    i++
}
console.log(factorial)



// 3. Создайте переменную с годом и используйте условие для проверки, является ли этот год високосным. Выведите соответствующее сообщение в консоль.

let year = 1992
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " - високосный");
} else  {
    console.log(year + " - не високосный");
}



// 4. Создайте массив и используйте цикл для подсчета количества вхождений каждого элемента. Выведите результат в консоль.

const arr4 = [1, 1, 2, 3, 3, 3, 4, 5, 6, 6, 7, 8, 9, 10, 10, 10, 10]

let count = {}

for (let element of arr4) {
    if (count[element]) {
        count[element]++
    } else  {
        count[element] = 1
    }
}
console.log(count)



// 5. Создайте объект с несколькими свойствами и напишите код для подсчета количества свойств в этом объекте. Выведите результат в консоль.

let obj = {
    name: 'Tom',
    age: 29,
    city: 'Rome',
}
let count5 = Object.keys(obj)
let result5 = count5.length
console.log(result5)


// 6. Создайте массив объектов пользователей с именем и возрастом. Используйте цикл для создания нового массива, содержащего только пользователей старше определенного возраста.
//    Выведите новый массив в консоль.

let arr6 = [
    { name:'Mike', age: 18 },
    { name:'Ava', age: 34 },
    { name:'Liam', age: 49 },
    { name:'Oliver', age: 24 },
    { name:'Amelia', age: 68},
    { name:'Charlotte', age: 31 }
]
let limit = 30
let arrAges = []

for (let person of arr6) {
 if (person.age > limit) {
     arrAges.push(person)
 }
}
console.log(arrAges)

// 7. Создать массив, заполнить его случайными числами от 0 до 100, чтобы длина массива была равна 10
//     random = Math.floor(Math.random() * 101)
//     101- максимальное число рандома, не включительно

let arr7 = []
for (let i =0; i < 10; i++) {
    let random = Math.floor(Math.random() * 101)
    arr7.push(random)
}
console.log(arr7)
// 8. Дана произвольная строка. разверните ее используя цикл for (без reverse)

let str = 'qwerty'

let reversed = ''
for (let i = str.length - 1; i >= 0; i--) {
   reversed  += str[i]

}
console.log(reversed)