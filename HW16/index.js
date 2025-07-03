

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    const userData = {
        name: name,
        email: email,
        password: password,
    }
    console.log(userData)
})

