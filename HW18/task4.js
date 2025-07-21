// 4.  Задача 4. Получить данные с https://jsonplaceholder.typicode.com, сделать карточки (можно взять с бутстрапа) и сделать постраничный вывод.
//         ?_start=5&_limit=5

const postsContainer = document.getElementById('postsContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const totalPosts = 20;
const limit = 5;
const maxPage = Math.ceil(totalPosts / limit);
let currentPage = 1;

async function fetchPosts(page) {
    const start = (page - 1) * limit;
    const url = `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.log(`Ошибка: ${response.status} ${response.statusText}`);
            return;
        }

        const posts = await response.json();
        renderPosts(posts);
        updateButtons();
    } catch (error) {
        console.log(error);
    }
}

function renderPosts(posts) {
    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'col-md-6';

        const imageUrl = `https://picsum.photos/seed/${post.id}/600/300`;

        card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${imageUrl}" class="card-img-top" alt="Изображение поста ${post.id}" style="max-height: 150px; object-fit: cover;">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.body}</p>
        </div>
      </div>
    `;

        postsContainer.appendChild(card);
    });
}

function updateButtons() {
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === maxPage;
}

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetchPosts(currentPage);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < maxPage) {
        currentPage++;
        fetchPosts(currentPage);
    }
});


fetchPosts(currentPage);