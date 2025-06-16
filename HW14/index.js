// 1. Напишите функцию isPrime(n), которая проверяет, является ли число n простым.

 function isPrime (n) {
   if (n <= 1) {
       console.log ('единица, ноль или отрицательное число не являются простыми')
       return
   }

   for (let i = 2; i*i <=n; i++) {
       if (n % i === 0) {
           console.log (n + ' - составное число')
           return
       }
   }
     console.log (n + ' - простое число')
 }

 isPrime(499)
 isPrime(9)


// 2. Напишите функцию isPalindrome(str), которая проверяет, является ли строка палиндромом (читается одинаково в прямом и обратном направлении).

function isPalindrome(str) {
    let str1 = str.toLowerCase()
    let reversedStr1 = str1.split('').reverse().join('')

    if(str1 === reversedStr1) {
        console.log(str + ' - палиндром')
    } else {
        console.log(str + ' - не палиндром')
    }
}

isPalindrome('Топот')
isPalindrome('Топор')



// 3. Создайте функцию uniqueValues(arr), которая возвращает новый массив, без повторяющихся значений из исходного массива arr.

function uniqueValues(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if(!result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    console.log(result)
}

const array = [1, 1, 2, 3, 3, 3, 4, 5, 6, 6, 7, 8, 9, 10, 10]

uniqueValues(array);

// 4. Напишите функцию sumRange(start, end), которая возвращает сумму всех целых чисел от start до end.

function sumRange(start, end) {

let sum = 0

    if (start > end) {
        [start, end] = [end, start]
    }
for (let i = start; i <= end; i++) {
    sum += i
}
console.log(sum)
}

sumRange(1,10)


// 5. Напишите функцию, которая принимает любую строку и выводит в консоль массив, содержащий только те символы,
//    которые встречаются в строке только один раз.
// Пример: Если входная строка равна "ШАЛАШ", функция должна вывести в консоль массив ['Л'], поскольку символ "Л" встречается в строке только один раз.

function uniqueValuesFromStr (str) {
    let str1 = str.toLowerCase()
    let strArr = str1.split('')

    let count = {}

        for (let element of strArr) {
            if (count[element]) {
                count[element]++
            } else  {
                count[element] = 1
            }
        }

    let result = []

    for (let element in count) {
        if (count[element] === 1) {
            result.push(element)
        }
    }
console.log(result)
}


uniqueValuesFromStr('шалаш')


// 6. Напишите функцию, которая принимает целое число, обозначающее длину массива. Заполните этот массив случайными целыми числами от 0 до 100.
//    Выведите в консоль получившийся массив.
//    Затем найдите и выведите в консоль максимальное значение, минимальное значение, сумму всех элементов и среднее арифметическое значение элементов в массиве.

function func (num) {
    if (num <= 0) {
        console.log('введите положительное число')
        return
    }

    let arr =[]
    for (let i = 0; i < num ; i++) {
        let random = Math.floor(Math.random() * 101)
        arr.push(random)
    }
console.log('массив', arr)

    let max = arr[0];
    let min = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
  if (min > arr[i]) {
    min = arr[i];
  }
}
 let sum = arr.reduce((acc, element) => acc + element, 0);
let average = sum / arr.length;


console.log('максимум', max)
console.log('минимум', min)
console.log('сумма', sum)
console.log('среднее', average)
}


func (11)

// 7.  Напишите функцию, которая принимает целое число n, обозначающее длину массива.
//     Создайте массив длиной n, заполненный последовательностью Фибоначчи, начиная с чисел 0 и 1.
//     Выведите в консоль получившийся массив.


function numberLength (num) {
    if (num <= 0) {
        console.log('введите положительное число')
        return
    }
    let arr = []
    for (let i = 0; i < num; i++) {
        if (i === 0) {
            arr.push(0)
        } else if (i === 1) {
            arr.push(1)
        } else {
            let num1 = arr[i - 1]
            let num2 = arr[i - 2]
            let nextNum = num1 + num2
            arr.push(nextNum)
        }
    }
    console.log(arr)
}


numberLength (15)
