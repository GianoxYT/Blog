// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const toggleModeButton = document.createElement('button');
    toggleModeButton.textContent = 'Toggle Dark Mode';
    toggleModeButton.classList.add('toggle-mode');
    document.body.appendChild(toggleModeButton);

    toggleModeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');
        document.querySelectorAll('.article-card').forEach(card => {
            card.classList.toggle('dark-mode');
        });
        toggleModeButton.classList.toggle('dark-mode');
    });

    fetch('articles.json')
        .then(response => response.json())
        .then(data => {
            const articlesSection = document.getElementById('articles');
            data.articles.forEach(article => {
                const articleCard = document.createElement('div');
                articleCard.classList.add('article-card');
                articleCard.innerHTML = `
                    <h2>${article.title}</h2>
                    <p>${article.excerpt}</p>
                    <a href="article.html?id=${article.id}">Lire plus</a>
                `;
                articlesSection.appendChild(articleCard);
            });
        });
});
