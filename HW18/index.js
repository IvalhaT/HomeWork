// 1. Задача 1: Получение данных пользователя
//     Напишите функцию, которая получает данные пользователя с https://jsonplaceholder.typicode.com/users/1 и выводит их в консоль.

async function userData () {
    try {
        const response = await fetch ('https://jsonplaceholder.typicode.com/users/1');
        const userData = await response.json();
        console.log(userData);
    } catch (error) {
        console.log(error);
    }
}
userData();

// 2.    Задача 2: Отправка данных
//     Создайте функцию, которая отправляет данные на сервер (например, новый пост) и выводит ответ.


// 3.    Задача 3: Обработка ошибок
//     Напишите функцию, которая обрабатывает ошибки при запросе к несуществующему URL.


// 4.  Задача 4. Получить данные с https://jsonplaceholder.typicode.com, сделать карточки (можно взять с бутстрап) и сделать постраничный вывод.
//         ?_start=5&_limit=5