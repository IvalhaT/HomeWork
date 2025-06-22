// 1. Условие: Написать функцию, которая принимает массив чисел и выполняет следующие операции:
//     - Находит среднее арифметическое четных элементов
//     - Возвращает новый массив без отрицательных чисел
//     - Вычисляет сумму элементов, кратных 3

 function arrays (arr) {
    let evenNumbers = arr.filter(num => num % 2 === 0);
    let evenSum = evenNumbers.reduce((acc, num)  => acc + num, 0);
    let average
     if ( evenNumbers.length > 0) {
        average =  evenSum / evenNumbers.length
     } else {
         average = 0
     }

    console.log('среднее арифметическое четных', average);

    let withoutNegativeArray = arr.filter(num => num >= 0)
     console.log('без отрицательных чисел', withoutNegativeArray)

     let multipleOfThree = arr.filter (num => num % 3 ===0)
     let sumMultipleOfThree = multipleOfThree.reduce((acc, num)  => acc + num, 0)
     console.log('сумма чисел, кратных трем', sumMultipleOfThree)


 }

const arr1 = [-1, 1, -2, 2, -3, 3, -4, 4, -5, 5, -6, 6, 7, 8, 9, 10];
arrays(arr1)




// 2. Написать функцию, которая принимает массив чисел и выполняет следующие операции:
//     Найти элемент, наиболее близкий к среднему арифметическому массива

function toAverage (arr) {

    let sum = arr.reduce((acc, num) => acc + num, 0)
    let average = sum/arr.length
    console.log('среднее', average);

    let closest = arr.reduce((previous, current) => {
        return (Math.abs(current - average) < Math.abs(previous - average))
            ? current
            : previous;

    })
    console.log('ближайшее к среднему', closest)
}

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
toAverage(arr2)




// 3. Написать функцию, которая принимает массив чисел и выполняет следующие операции:
//     Вычислить сумму элементов между первым и последним нулевыми элементами

function sumBetweenZeros (arr) {
    let firstZero = arr.indexOf(0)
    let lastZero = arr.lastIndexOf(0)

    let betweenZeros = arr.slice(firstZero + 1, lastZero)
    let sum = betweenZeros.reduce((acc, num) => acc + num, 0)

    console.log('сумма чисел между нулями', sum)
}

const arr3 = [1, 2, 3, 44, 5, 6, 17, 8, 9, 0, 1, 15, 0, 66]
sumBetweenZeros(arr3)



// 4. Написать функцию, которая принимает массив чисел и выполняет следующие операции:
//     Выполнить сдвиг массива на n элементов вправо. Пустые элементы заполнить каким-либо значением

function shiftRight (arr, n, fillValue = 0) {
    const fillArray = []
    let count = 0
    while (count < n) {
        fillArray.push(fillValue)
        count++
    }

    const originArr = arr.slice(0, arr.length - n)
    const result = fillArray.concat(originArr)

    console.log(result)
}

const arr4 = [1, 2, 3, 44, 5, 6, 17, 8, 9, 0, 1, 15, 0, 66]
shiftRight(arr4, 3)




// 5. Написать функцию, которая принимает массив чисел и выполняет следующие операции:
//     Найти максимальное количество подряд идущих одинаковых элементов

function maxRow (arr) {
    if (arr.length === 0) return 0

    let maxCount = 1
    let currentCount = 1

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i -1]) {
            currentCount++
            if (currentCount > maxCount) {
                maxCount = currentCount
            }
        } else {
            currentCount = 1
        }
    }
    console.log(maxCount)
}

const arr5 = [1, 2, 3, 44, 5, 6, 17, 8, 9, 0, 1, 1, 1]
maxRow(arr5)