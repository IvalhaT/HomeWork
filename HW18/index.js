// 1. Задача 1: Получение данных пользователя.
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
// userData();

// 2. Задача 2: Отправка данных.
//     Создайте функцию, которая отправляет данные на сервер (например, новый пост) и выводит ответ.

async function sendPostData () {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'новый пост',
                body:'содержимое поста',
                userID: 1
            })
        });
        const result = await response.json();
        console.log(result);
    }  catch (error) {
        console.log(error);
    }
}

// sendPostData()


// 3. Задача 3: Обработка ошибок.
//     Напишите функцию, которая обрабатывает ошибки при запросе к несуществующему URL.

async function fetchWithError () {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/invalid-url');

        if (!response.ok) {
            console.log(`ошибка: ${response.status} ${response.statusText}`);
            return;
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Произошла сетевая ошибка:', error);
    }
}

// fetchWithError();



